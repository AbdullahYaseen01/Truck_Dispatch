import { get, put } from "@vercel/blob";

export type RegistrationStatus = "new" | "reviewed" | "contacted" | "approved" | "rejected";

export type CarrierRegistration = {
  id: string;
  createdAt: string;
  status: RegistrationStatus;
  companyName: string;
  ownerName: string;
  dispatchContact: string;
  email: string;
  phone: string;
  mcNumber: string;
  dotNumber: string;
  ein: string;
  yearsInBusiness: string;
  equipment: string[];
  numberOfDrivers: string;
  numberOfTrucks: string;
  truckYear: string;
  truckMake: string;
  truckModel: string;
  eldProvider: string;
  currentLocation: string;
  preferredStates: string;
  preferredLanes: string;
  insuranceCompany: string;
  policyExpiration: string;
  cargoInsurance: string;
  liabilityInsurance: string;
  isFactoring: string;
  factoringCompany: string;
  needFactoringHelp: string;
  specialRequirements: string;
  preferredBrokers: string;
  comments: string;
};

export type RegistrationInput = Omit<CarrierRegistration, "id" | "createdAt" | "status">;

const BLOB_PATH = "carrier-registrations.json";

async function readAll(): Promise<CarrierRegistration[]> {
  try {
    const result = await get(BLOB_PATH, { access: "private", useCache: false });
    if (!result?.stream) return [];

    const text = await new Response(result.stream).text();
    if (!text.trim()) return [];

    const parsed = JSON.parse(text) as CarrierRegistration[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeAll(list: CarrierRegistration[]): Promise<void> {
  await put(BLOB_PATH, JSON.stringify(list), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 60,
  });
}

export async function listRegistrations(): Promise<CarrierRegistration[]> {
  const list = await readAll();
  return [...list].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getRegistration(id: string): Promise<CarrierRegistration | null> {
  const list = await readAll();
  return list.find((item) => item.id === id) ?? null;
}

export async function createRegistration(
  input: RegistrationInput
): Promise<CarrierRegistration> {
  const list = await readAll();
  const record: CarrierRegistration = {
    ...input,
    id: `reg_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    status: "new",
  };
  list.unshift(record);
  await writeAll(list);
  return record;
}

export async function updateRegistrationStatus(
  id: string,
  status: RegistrationStatus
): Promise<CarrierRegistration | null> {
  const list = await readAll();
  const index = list.findIndex((item) => item.id === id);
  if (index < 0) return null;
  list[index] = { ...list[index], status };
  await writeAll(list);
  return list[index];
}

export async function deleteRegistration(id: string): Promise<boolean> {
  const list = await readAll();
  const next = list.filter((item) => item.id !== id);
  if (next.length === list.length) return false;
  await writeAll(next);
  return true;
}
