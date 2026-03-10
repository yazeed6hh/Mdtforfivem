import { useState } from "react";
import { Search, User, AlertCircle, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Label } from "../components/ui/label";

interface PersonData {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  height: string;
  weight: string;
  licenses: string[];
  warrants: string[];
  priors: Array<{ date: string; crime: string; sentence: string }>;
}

export function PersonSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [personData, setPersonData] = useState<PersonData | null>(null);

  const mockPersons: Record<string, PersonData> = {
    "john smith": {
      firstName: "John",
      lastName: "Smith",
      dob: "05/15/1985",
      gender: "Male",
      height: "6'2\"",
      weight: "185 lbs",
      licenses: ["Driver's License", "Weapon License"],
      warrants: [],
      priors: [
        { date: "2023-01-15", crime: "Speeding", sentence: "$250 Fine" },
        { date: "2022-06-20", crime: "Parking Violation", sentence: "$100 Fine" },
      ],
    },
    "michael torres": {
      firstName: "Michael",
      lastName: "Torres",
      dob: "08/22/1990",
      gender: "Male",
      height: "5'10\"",
      weight: "175 lbs",
      licenses: ["Driver's License"],
      warrants: ["Armed Robbery"],
      priors: [
        { date: "2024-01-10", crime: "Possession of Stolen Goods", sentence: "6 months" },
        { date: "2023-09-05", crime: "Assault", sentence: "1 year probation" },
        { date: "2022-12-12", crime: "Breaking and Entering", sentence: "2 years" },
      ],
    },
    "sarah johnson": {
      firstName: "Sarah",
      lastName: "Johnson",
      dob: "11/03/1995",
      gender: "Female",
      height: "5'6\"",
      weight: "130 lbs",
      licenses: ["Driver's License", "Pilot License"],
      warrants: ["Grand Theft Auto"],
      priors: [
        { date: "2024-02-14", crime: "Reckless Driving", sentence: "$500 Fine" },
      ],
    },
  };

  const handleSearch = () => {
    const result = mockPersons[searchTerm.toLowerCase()];
    setPersonData(result || null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Person Search</h2>
        <p className="text-slate-400">Search for individuals in the database</p>
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
                Name or ID
              </Label>
              <Input
                id="search"
                placeholder="Enter first name, last name, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
      {personData ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <User className="size-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-slate-400">First Name</div>
                  <div className="text-white font-medium">{personData.firstName}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Last Name</div>
                  <div className="text-white font-medium">{personData.lastName}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Date of Birth</div>
                  <div className="text-white font-medium">{personData.dob}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Gender</div>
                  <div className="text-white font-medium">{personData.gender}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Height</div>
                  <div className="text-white font-medium">{personData.height}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Weight</div>
                  <div className="text-white font-medium">{personData.weight}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <div className="text-sm text-slate-400 mb-2">Licenses</div>
                <div className="flex flex-wrap gap-2">
                  {personData.licenses.map((license, index) => (
                    <Badge key={index} className="bg-green-950 text-green-400 border-green-800">
                      {license}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warrants */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <AlertCircle className="size-5" />
                Active Warrants
              </CardTitle>
            </CardHeader>
            <CardContent>
              {personData.warrants.length > 0 ? (
                <div className="space-y-2">
                  {personData.warrants.map((warrant, index) => (
                    <div
                      key={index}
                      className="p-3 bg-red-950 border border-red-800 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <AlertCircle className="size-4 text-red-400" />
                        <span className="text-red-300 font-medium">{warrant}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-slate-400 text-center py-6">
                  No active warrants
                </div>
              )}
            </CardContent>
          </Card>

          {/* Criminal Record */}
          <Card className="bg-slate-900 border-slate-800 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <FileText className="size-5" />
                Criminal Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              {personData.priors.length > 0 ? (
                <div className="space-y-3">
                  {personData.priors.map((prior, index) => (
                    <div
                      key={index}
                      className="p-4 bg-slate-800 border border-slate-700 rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-medium text-white">{prior.crime}</div>
                        <div className="text-sm text-slate-400">{prior.date}</div>
                      </div>
                      <div className="text-sm text-slate-400">
                        Sentence: <span className="text-slate-300">{prior.sentence}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-slate-400 text-center py-6">
                  No prior criminal record
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

      {!personData && !searchTerm && (
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="py-12">
            <div className="text-center">
              <Search className="size-12 mx-auto mb-4 text-slate-600" />
              <div className="text-slate-400">
                Enter a name to search for individuals
              </div>
              <div className="text-sm text-slate-500 mt-2">
                Try: "John Smith", "Michael Torres", or "Sarah Johnson"
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
