import { redirect } from "next/navigation";
import AdminDashboard from "@/components/AdminDashboard";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { listRegistrations } from "@/lib/registrations-store";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const registrations = await listRegistrations();
  return <AdminDashboard initialRegistrations={registrations} />;
}
