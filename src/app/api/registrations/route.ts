import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import {
  createRegistration,
  listRegistrations,
  type RegistrationInput,
} from "@/lib/registrations-store";

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }
  if (typeof value === "string" && value.trim()) {
    return value.split(",").map((item) => item.trim()).filter(Boolean);
  }
  return [];
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const registrations = await listRegistrations();
  return NextResponse.json({ registrations });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const input: RegistrationInput = {
    companyName: asString(body.companyName),
    ownerName: asString(body.ownerName),
    dispatchContact: asString(body.dispatchContact),
    email: asString(body.email),
    phone: asString(body.phone),
    mcNumber: asString(body.mcNumber),
    dotNumber: asString(body.dotNumber),
    ein: asString(body.ein),
    yearsInBusiness: asString(body.yearsInBusiness),
    equipment: asStringArray(body.equipment),
    numberOfDrivers: asString(body.numberOfDrivers),
    numberOfTrucks: asString(body.numberOfTrucks),
    truckYear: asString(body.truckYear),
    truckMake: asString(body.truckMake),
    truckModel: asString(body.truckModel),
    eldProvider: asString(body.eldProvider),
    currentLocation: asString(body.currentLocation),
    preferredStates: asString(body.preferredStates),
    preferredLanes: asString(body.preferredLanes),
    insuranceCompany: asString(body.insuranceCompany),
    policyExpiration: asString(body.policyExpiration),
    cargoInsurance: asString(body.cargoInsurance),
    liabilityInsurance: asString(body.liabilityInsurance),
    isFactoring: asString(body.isFactoring),
    factoringCompany: asString(body.factoringCompany),
    needFactoringHelp: asString(body.needFactoringHelp),
    specialRequirements: asString(body.specialRequirements),
    preferredBrokers: asString(body.preferredBrokers),
    comments: asString(body.comments),
  };

  const required = [
    input.companyName,
    input.ownerName,
    input.dispatchContact,
    input.email,
    input.phone,
    input.mcNumber,
    input.dotNumber,
  ];

  if (required.some((value) => !value)) {
    return NextResponse.json(
      { error: "Missing required registration fields" },
      { status: 400 }
    );
  }

  const record = await createRegistration(input);
  return NextResponse.json({ registration: record }, { status: 201 });
}
