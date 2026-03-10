import { useState } from "react";
import { AlertTriangle, Plus, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

interface Warrant {
  id: string;
  name: string;
  crime: string;
  issued: string;
  issuedBy: string;
  bail: string;
  status: string;
  description: string;
}

export function Warrants() {
  const [warrants, setWarrants] = useState<Warrant[]>([
    {
      id: "WRT-2024-001",
      name: "Michael Torres",
      crime: "Armed Robbery",
      issued: "2024-03-08",
      issuedBy: "Judge Anderson",
      bail: "$50,000",
      status: "Active",
      description: "Suspect wanted for armed robbery at convenience store on Grove Street.",
    },
    {
      id: "WRT-2024-002",
      name: "Sarah Johnson",
      crime: "Grand Theft Auto",
      issued: "2024-03-09",
      issuedBy: "Judge Williams",
      bail: "$25,000",
      status: "Active",
      description: "Suspect allegedly stole a BMW M5 from dealership parking lot.",
    },
    {
      id: "WRT-2024-003",
      name: "David Martinez",
      crime: "Assault",
      issued: "2024-03-10",
      issuedBy: "Judge Thompson",
      bail: "$10,000",
      status: "Active",
      description: "Assault with a deadly weapon during altercation at local bar.",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [crime, setCrime] = useState("");
  const [bail, setBail] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateWarrant = () => {
    const newWarrant: Warrant = {
      id: `WRT-2024-${String(warrants.length + 1).padStart(3, "0")}`,
      name: name,
      crime: crime,
      issued: new Date().toISOString().split("T")[0],
      issuedBy: "Judge Anderson",
      bail: bail,
      status: "Active",
      description: description,
    };
    setWarrants([newWarrant, ...warrants]);
    setIsOpen(false);
    setName("");
    setCrime("");
    setBail("");
    setDescription("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Warrants</h2>
          <p className="text-slate-400">Active arrest warrants</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700">
              <Plus className="size-4 mr-2" />
              Issue Warrant
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-white">Issue New Warrant</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Label htmlFor="name" className="text-slate-300">Suspect Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter suspect name..."
                  className="bg-slate-800 border-slate-700 text-white mt-2"
                />
              </div>
              <div>
                <Label htmlFor="crime" className="text-slate-300">Crime</Label>
                <Select value={crime} onValueChange={setCrime}>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white mt-2">
                    <SelectValue placeholder="Select crime" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="Armed Robbery">Armed Robbery</SelectItem>
                    <SelectItem value="Grand Theft Auto">Grand Theft Auto</SelectItem>
                    <SelectItem value="Assault">Assault</SelectItem>
                    <SelectItem value="Murder">Murder</SelectItem>
                    <SelectItem value="Drug Trafficking">Drug Trafficking</SelectItem>
                    <SelectItem value="Kidnapping">Kidnapping</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="bail" className="text-slate-300">Bail Amount</Label>
                <Input
                  id="bail"
                  value={bail}
                  onChange={(e) => setBail(e.target.value)}
                  placeholder="e.g., $50,000"
                  className="bg-slate-800 border-slate-700 text-white mt-2"
                />
              </div>
              <div>
                <Label htmlFor="description" className="text-slate-300">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter warrant details..."
                  rows={4}
                  className="bg-slate-800 border-slate-700 text-white mt-2"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateWarrant}
                  disabled={!name || !crime || !bail}
                  className="flex-1 bg-red-600 hover:bg-red-700"
                >
                  Issue Warrant
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="outline"
                  className="flex-1 bg-slate-800 border-slate-700 hover:bg-slate-700"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Warrants List */}
      <div className="grid grid-cols-1 gap-4">
        {warrants.map((warrant) => (
          <Card key={warrant.id} className="bg-slate-900 border-red-900">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 bg-red-950 rounded-lg border border-red-800">
                    <AlertTriangle className="size-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg text-white">{warrant.name}</h3>
                      <Badge className="bg-red-950 text-red-400 border-red-800">
                        {warrant.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                      <div>
                        <div className="text-xs text-slate-500">Warrant ID</div>
                        <div className="text-sm text-slate-300">{warrant.id}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Crime</div>
                        <div className="text-sm text-slate-300">{warrant.crime}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Bail Amount</div>
                        <div className="text-sm text-slate-300">{warrant.bail}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Issued</div>
                        <div className="text-sm text-slate-300">{warrant.issued}</div>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-800">
                      <div className="text-xs text-slate-500 mb-1">Details</div>
                      <p className="text-sm text-slate-300">{warrant.description}</p>
                    </div>
                    <div className="mt-3 text-xs text-slate-500">
                      Issued by: {warrant.issuedBy}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-white"
                  >
                    <User className="size-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
