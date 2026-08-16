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

const globalStore = globalThis as typeof globalThis & {
  __fthRegistrations?: CarrierRegistration[];
};

function memoryList(): CarrierRegistration[] {
  if (!globalStore.__fthRegistrations) {
    globalStore.__fthRegistrations = [];
  }
  return globalStore.__fthRegistrations;
}

async function readFromDisk(): Promise<CarrierRegistration[] | null> {
  if (typeof window !== "undefined") return null;
  try {
    const { readFile } = await import("fs/promises");
    const { join } = await import("path");
    const tmpPath = join("/tmp", "fth-registrations.json");
    const dataPath = join(process.cwd(), "data", "registrations.json");

    for (const path of [tmpPath, dataPath]) {
      try {
        const raw = await readFile(path, "utf8");
        const parsed = JSON.parse(raw) as CarrierRegistration[];
        if (Array.isArray(parsed)) return parsed;
      } catch {
        // try next path
      }
    }
  } catch {
    // ignore
  }
  return null;
}

async function writeToDisk(list: CarrierRegistration[]): Promise<void> {
  if (typeof window !== "undefined") return;
  try {
    const { writeFile, mkdir } = await import("fs/promises");
    const { join, dirname } = await import("path");
    const payload = JSON.stringify(list, null, 2);

    const tmpPath = join("/tmp", "fth-registrations.json");
    await writeFile(tmpPath, payload, "utf8");

    try {
      const dataPath = join(process.cwd(), "data", "registrations.json");
      await mkdir(dirname(dataPath), { recursive: true });
      await writeFile(dataPath, payload, "utf8");
    } catch {
      // read-only filesystem on some serverless hosts
    }
  } catch {
    // ignore disk errors; memory still holds data for warm instances
  }
}

async function ensureLoaded(): Promise<CarrierRegistration[]> {
  const mem = memoryList();
  if (mem.length > 0) return mem;

  const disk = await readFromDisk();
  if (disk && disk.length > 0) {
    globalStore.__fthRegistrations = disk;
    return disk;
  }
  return mem;
}

export async function listRegistrations(): Promise<CarrierRegistration[]> {
  const list = await ensureLoaded();
  return [...list].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getRegistration(id: string): Promise<CarrierRegistration | null> {
  const list = await ensureLoaded();
  return list.find((item) => item.id === id) ?? null;
}

export async function createRegistration(
  input: RegistrationInput
): Promise<CarrierRegistration> {
  const list = await ensureLoaded();
  const record: CarrierRegistration = {
    ...input,
    id: `reg_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    status: "new",
  };
  list.unshift(record);
  globalStore.__fthRegistrations = list;
  await writeToDisk(list);
  return record;
}

export async function updateRegistrationStatus(
  id: string,
  status: RegistrationStatus
): Promise<CarrierRegistration | null> {
  const list = await ensureLoaded();
  const index = list.findIndex((item) => item.id === id);
  if (index < 0) return null;
  list[index] = { ...list[index], status };
  globalStore.__fthRegistrations = list;
  await writeToDisk(list);
  return list[index];
}

export async function deleteRegistration(id: string): Promise<boolean> {
  const list = await ensureLoaded();
  const next = list.filter((item) => item.id !== id);
  if (next.length === list.length) return false;
  globalStore.__fthRegistrations = next;
  await writeToDisk(next);
  return true;
}
