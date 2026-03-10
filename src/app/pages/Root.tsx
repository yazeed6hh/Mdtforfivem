import { Outlet, Link, useLocation } from "react-router";
import { Shield, Search, Car, FileText, AlertTriangle, Users, Radio } from "lucide-react";
import { cn } from "../components/ui/utils";

export function Root() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", icon: Shield },
    { path: "/person-search", label: "Person Search", icon: Search },
    { path: "/vehicle-search", label: "Vehicle Search", icon: Car },
    { path: "/reports", label: "Reports", icon: FileText },
    { path: "/warrants", label: "Warrants", icon: AlertTriangle },
    { path: "/units", label: "Units", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="size-8 text-blue-500" />
            <div>
              <h1 className="font-semibold">Los Santos Police Department</h1>
              <p className="text-sm text-slate-400">Mobile Data Terminal</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-950 border border-green-800 rounded">
              <Radio className="size-4 text-green-500" />
              <span className="text-sm text-green-400">10-8 On Duty</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">Officer John Smith</div>
              <div className="text-xs text-slate-400">Badge #1234 | Unit 1-Adam-12</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-slate-900 border-r border-slate-800 min-h-[calc(100vh-73px)]">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  )}
                >
                  <Icon className="size-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
