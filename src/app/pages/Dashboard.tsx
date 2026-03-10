import { AlertTriangle, FileText, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function Dashboard() {
  const recentCalls = [
    { id: "10-1234", type: "10-32", location: "Legion Square", time: "2 min ago", priority: "high" },
    { id: "10-1235", type: "10-11", location: "Grove Street", time: "5 min ago", priority: "medium" },
    { id: "10-1236", type: "10-10", location: "Sandy Shores", time: "12 min ago", priority: "low" },
    { id: "10-1237", type: "10-66", location: "Paleto Bay", time: "18 min ago", priority: "medium" },
  ];

  const activeWarrants = [
    { name: "Michael Torres", crime: "Armed Robbery", issued: "2024-03-08" },
    { name: "Sarah Johnson", crime: "Grand Theft Auto", issued: "2024-03-09" },
    { name: "David Martinez", crime: "Assault", issued: "2024-03-10" },
  ];

  const activeUnits = [
    { unit: "1-Adam-12", officer: "John Smith", status: "10-8", location: "Downtown" },
    { unit: "1-Adam-15", officer: "Jane Doe", status: "10-6", location: "Sandy Shores" },
    { unit: "1-Adam-20", officer: "Mike Ross", status: "10-8", location: "Paleto Bay" },
    { unit: "2-King-5", officer: "Sarah Connor", status: "10-7", location: "MRPD" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Dashboard</h2>
        <p className="text-slate-400">Welcome back, Officer Smith</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Active Units</CardTitle>
            <Users className="size-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-slate-400 mt-1">4 available</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Open Warrants</CardTitle>
            <AlertTriangle className="size-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">23</div>
            <p className="text-xs text-slate-400 mt-1">+3 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Reports Today</CardTitle>
            <FileText className="size-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">8</div>
            <p className="text-xs text-slate-400 mt-1">+2 from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Active Calls</CardTitle>
            <Clock className="size-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">4</div>
            <p className="text-xs text-slate-400 mt-1">1 high priority</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Calls */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Recent Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentCalls.map((call) => (
                <div
                  key={call.id}
                  className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        call.priority === "high"
                          ? "bg-red-500"
                          : call.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    />
                    <div>
                      <div className="font-medium text-white">{call.type}</div>
                      <div className="text-sm text-slate-400">{call.location}</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">{call.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Units */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Active Units</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {activeUnits.map((unit) => (
                <div
                  key={unit.unit}
                  className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700"
                >
                  <div>
                    <div className="font-medium text-white">{unit.unit}</div>
                    <div className="text-sm text-slate-400">{unit.officer}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-400">{unit.status}</div>
                    <div className="text-xs text-slate-400">{unit.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Warrants */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Active Warrants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {activeWarrants.map((warrant, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700"
              >
                <div>
                  <div className="font-medium text-white">{warrant.name}</div>
                  <div className="text-sm text-slate-400">{warrant.crime}</div>
                </div>
                <div className="text-xs text-slate-400">Issued: {warrant.issued}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
