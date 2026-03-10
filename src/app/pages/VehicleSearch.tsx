import { useState } from "react";
import { Search, Car, User, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Label } from "../components/ui/label";

interface VehicleData {
  plate: string;
  make: string;
  model: string;
  year: string;
  color: string;
  owner: string;
  status: string;
  insurance: string;
  registration: string;
  flags: string[];
}

export function VehicleSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);

  const mockVehicles: Record<string, VehicleData> = {
    "abc123": {
      plate: "ABC123",
      make: "Audi",
      model: "RS7",
      year: "2023",
      color: "Black",
      owner: "John Smith",
      status: "Valid",
      insurance: "Active",
      registration: "Valid until 03/2027",
      flags: [],
    },
    "xyz789": {
      plate: "XYZ789",
      make: "BMW",
      model: "M5",
      year: "2022",
      color: "White",
      owner: "Michael Torres",
      status: "Stolen",
      insurance: "Active",
      registration: "Valid until 08/2026",
      flags: ["Stolen Vehicle", "Armed Suspect"],
    },
    "def456": {
      plate: "DEF456",
      make: "Mercedes-Benz",
      model: "AMG GT",
      year: "2024",
      color: "Silver",
      owner: "Sarah Johnson",
      status: "Valid",
      insurance: "Expired",
      registration: "Expired",
      flags: ["Expired Registration", "No Insurance"],
    },
  };

  const handleSearch = () => {
    const result = mockVehicles[searchTerm.toLowerCase()];
    setVehicleData(result || null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Vehicle Search</h2>
        <p className="text-slate-400">Search for vehicles by license plate</p>
      </div>

      {/* Search Card */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <div className="flex-1">
              <Label htmlFor="search" className="text-slate-300 mb-2 block">
                License Plate
              </Label>
              <Input
                id="search"
                placeholder="Enter license plate number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>
            <div className="flex items-end">
              <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                <Search className="size-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {vehicleData ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Vehicle Information */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Car className="size-5" />
                Vehicle Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-slate-400">Plate Number</div>
                  <div className="text-white font-medium">{vehicleData.plate}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Status</div>
                  <Badge
                    className={
                      vehicleData.status === "Valid"
                        ? "bg-green-950 text-green-400 border-green-800"
                        : "bg-red-950 text-red-400 border-red-800"
                    }
                  >
                    {vehicleData.status}
                  </Badge>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Make</div>
                  <div className="text-white font-medium">{vehicleData.make}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Model</div>
                  <div className="text-white font-medium">{vehicleData.model}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Year</div>
                  <div className="text-white font-medium">{vehicleData.year}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Color</div>
                  <div className="text-white font-medium">{vehicleData.color}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Owner Information */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <User className="size-5" />
                Owner Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm text-slate-400">Registered Owner</div>
                <div className="text-white font-medium">{vehicleData.owner}</div>
              </div>
              <div>
                <div className="text-sm text-slate-400">Insurance Status</div>
                <Badge
                  className={
                    vehicleData.insurance === "Active"
                      ? "bg-green-950 text-green-400 border-green-800"
                      : "bg-red-950 text-red-400 border-red-800"
                  }
                >
                  {vehicleData.insurance}
                </Badge>
              </div>
              <div>
                <div className="text-sm text-slate-400">Registration</div>
                <div className="text-white font-medium">{vehicleData.registration}</div>
              </div>
            </CardContent>
          </Card>

          {/* Flags & Alerts */}
          <Card className="bg-slate-900 border-slate-800 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <AlertCircle className="size-5" />
                Flags & Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              {vehicleData.flags.length > 0 ? (
                <div className="space-y-2">
                  {vehicleData.flags.map((flag, index) => (
                    <div
                      key={index}
                      className="p-4 bg-red-950 border border-red-800 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <AlertCircle className="size-5 text-red-400" />
                        <span className="text-red-300 font-medium">{flag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-slate-400 text-center py-6">
                  No flags or alerts
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      ) : searchTerm && (
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="py-12">
            <div className="text-center text-slate-400">
              No results found for "{searchTerm}"
            </div>
          </CardContent>
        </Card>
      )}

      {!vehicleData && !searchTerm && (
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="py-12">
            <div className="text-center">
              <Search className="size-12 mx-auto mb-4 text-slate-600" />
              <div className="text-slate-400">
                Enter a license plate to search for vehicles
              </div>
              <div className="text-sm text-slate-500 mt-2">
                Try: "ABC123", "XYZ789", or "DEF456"
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
