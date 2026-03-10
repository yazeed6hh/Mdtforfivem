import { Users, MapPin, Clock, Radio } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

interface Unit {
  callsign: string;
  officer: string;
  badge: string;
  status: string;
  location: string;
  lastUpdate: string;
  activity: string;
}

export function Units() {
  const units: Unit[] = [
    {
      callsign: "1-Adam-12",
      officer: "John Smith",
      badge: "#1234",
      status: "10-8",
      location: "Downtown Los Santos",
      lastUpdate: "2 min ago",
      activity: "Patrol",
    },
    {
      callsign: "1-Adam-15",
      officer: "Jane Doe",
      badge: "#1235",
      status: "10-6",
      location: "Sandy Shores Airfield",
      lastUpdate: "5 min ago",
      activity: "Busy",
    },
    {
      callsign: "1-Adam-20",
      officer: "Mike Ross",
      badge: "#1236",
      status: "10-8",
      location: "Paleto Bay",
      lastUpdate: "1 min ago",
      activity: "Patrol",
    },
    {
      callsign: "2-King-5",
      officer: "Sarah Connor",
      badge: "#2234",
      status: "10-7",
      location: "Mission Row PD",
      lastUpdate: "10 min ago",
      activity: "Out of Service",
    },
    {
      callsign: "1-David-8",
      officer: "Alex Morgan",
      badge: "#1237",
      status: "10-97",
      location: "Legion Square",
      lastUpdate: "Just now",
      activity: "On Scene",
    },
    {
      callsign: "3-Lincoln-2",
      officer: "Chris Evans",
      badge: "#3201",
      status: "10-8",
      location: "Vinewood Hills",
      lastUpdate: "3 min ago",
      activity: "Patrol",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "10-8":
        return "bg-green-950 text-green-400 border-green-800";
      case "10-6":
        return "bg-yellow-950 text-yellow-400 border-yellow-800";
      case "10-7":
        return "bg-slate-700 text-slate-300 border-slate-600";
      case "10-97":
        return "bg-blue-950 text-blue-400 border-blue-800";
      default:
        return "bg-slate-700 text-slate-300 border-slate-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "10-8":
        return "Available";
      case "10-6":
        return "Busy";
      case "10-7":
        return "Out of Service";
      case "10-97":
        return "On Scene";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Active Units</h2>
        <p className="text-slate-400">Currently on-duty officers and their status</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Units</CardTitle>
            <Users className="size-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{units.length}</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Available</CardTitle>
            <Radio className="size-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">
              {units.filter((u) => u.status === "10-8").length}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Busy</CardTitle>
            <Radio className="size-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">
              {units.filter((u) => u.status === "10-6").length}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">On Scene</CardTitle>
            <Radio className="size-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">
              {units.filter((u) => u.status === "10-97").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Units List */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Unit Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {units.map((unit) => (
              <div
                key={unit.callsign}
                className="p-4 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-750 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-2 bg-slate-700 rounded-lg">
                      <Radio className="size-5 text-slate-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-white">{unit.callsign}</h3>
                        <Badge className={getStatusColor(unit.status)}>
                          {getStatusText(unit.status)}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="size-4 text-slate-500" />
                          <span className="text-slate-300">
                            {unit.officer} ({unit.badge})
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="size-4 text-slate-500" />
                          <span className="text-slate-300">{unit.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="size-4 text-slate-500" />
                          <span className="text-slate-400">{unit.lastUpdate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400">{unit.activity}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
