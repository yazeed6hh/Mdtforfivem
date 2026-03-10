import { useState } from "react";
import { FileText, Plus, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

interface Report {
  id: string;
  type: string;
  title: string;
  date: string;
  time: string;
  officer: string;
  status: string;
}

export function Reports() {
  const [reports, setReports] = useState<Report[]>([
    {
      id: "RPT-2024-001",
      type: "Incident Report",
      title: "Traffic Collision on Grove Street",
      date: "2024-03-10",
      time: "14:30",
      officer: "John Smith",
      status: "Completed",
    },
    {
      id: "RPT-2024-002",
      type: "Arrest Report",
      title: "Arrest for Armed Robbery",
      date: "2024-03-09",
      time: "22:15",
      officer: "Jane Doe",
      status: "Completed",
    },
    {
      id: "RPT-2024-003",
      type: "Incident Report",
      title: "Domestic Disturbance",
      date: "2024-03-09",
      time: "18:45",
      officer: "Mike Ross",
      status: "Pending Review",
    },
    {
      id: "RPT-2024-004",
      type: "Traffic Stop",
      title: "DUI Checkpoint - Multiple Citations",
      date: "2024-03-08",
      time: "01:20",
      officer: "Sarah Connor",
      status: "Completed",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [reportType, setReportType] = useState("");
  const [reportTitle, setReportTitle] = useState("");
  const [reportDescription, setReportDescription] = useState("");

  const handleCreateReport = () => {
    const newReport: Report = {
      id: `RPT-2024-${String(reports.length + 1).padStart(3, "0")}`,
      type: reportType,
      title: reportTitle,
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" }),
      officer: "John Smith",
      status: "Draft",
    };
    setReports([newReport, ...reports]);
    setIsOpen(false);
    setReportType("");
    setReportTitle("");
    setReportDescription("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Reports</h2>
          <p className="text-slate-400">View and create incident reports</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="size-4 mr-2" />
              New Report
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-white">Create New Report</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Label htmlFor="type" className="text-slate-300">Report Type</Label>
                <Select value={reportType} onValueChange={setReportType}>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white mt-2">
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="Incident Report">Incident Report</SelectItem>
                    <SelectItem value="Arrest Report">Arrest Report</SelectItem>
                    <SelectItem value="Traffic Stop">Traffic Stop</SelectItem>
                    <SelectItem value="Investigation">Investigation</SelectItem>
                    <SelectItem value="Use of Force">Use of Force</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="title" className="text-slate-300">Title</Label>
                <Input
                  id="title"
                  value={reportTitle}
                  onChange={(e) => setReportTitle(e.target.value)}
                  placeholder="Enter report title..."
                  className="bg-slate-800 border-slate-700 text-white mt-2"
                />
              </div>
              <div>
                <Label htmlFor="description" className="text-slate-300">Description</Label>
                <Textarea
                  id="description"
                  value={reportDescription}
                  onChange={(e) => setReportDescription(e.target.value)}
                  placeholder="Enter detailed description..."
                  rows={6}
                  className="bg-slate-800 border-slate-700 text-white mt-2"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateReport}
                  disabled={!reportType || !reportTitle}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Create Report
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

      {/* Reports List */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">All Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reports.map((report) => (
              <div
                key={report.id}
                className="p-4 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-750 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="size-5 text-blue-400" />
                      <div>
                        <div className="font-medium text-white">{report.title}</div>
                        <div className="text-sm text-slate-400">{report.id}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                      <div>
                        <div className="text-xs text-slate-500">Type</div>
                        <div className="text-sm text-slate-300">{report.type}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Date & Time</div>
                        <div className="text-sm text-slate-300">
                          {report.date} {report.time}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Officer</div>
                        <div className="text-sm text-slate-300">{report.officer}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Status</div>
                        <Badge
                          className={
                            report.status === "Completed"
                              ? "bg-green-950 text-green-400 border-green-800"
                              : report.status === "Pending Review"
                              ? "bg-yellow-950 text-yellow-400 border-yellow-800"
                              : "bg-slate-700 text-slate-300 border-slate-600"
                          }
                        >
                          {report.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-white hover:bg-slate-700"
                  >
                    <Eye className="size-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
