// Mock data for NOC Supervisor Wallboard
// Simulating CUCM CDR and CTI/JTAPI data

export const initialActiveCalls = [
  {
    id: 1,
    callerId: '+60 12-345 6789',
    targetAgent: 'Ahmad Razak',
    status: 'Talking',
    duration: 245, // seconds
    extension: '1001',
  },
  {
    id: 2,
    callerId: '+60 13-987 6543',
    targetAgent: 'Siti Aminah',
    status: 'Ringing',
    duration: 12,
    extension: '1002',
  },
  {
    id: 3,
    callerId: '+60 14-555 1234',
    targetAgent: 'Mohamed Faiz',
    status: 'Hold',
    duration: 180,
    extension: '1003',
  },
  {
    id: 4,
    callerId: '+60 16-222 8888',
    targetAgent: 'Nurul Huda',
    status: 'Talking',
    duration: 98,
    extension: '1004',
  },
  {
    id: 5,
    callerId: '+60 17-111 4444',
    targetAgent: 'Hafiz Rahman',
    status: 'Ringing',
    duration: 5,
    extension: '1005',
  },
  {
    id: 6,
    callerId: '+60 19-333 7777',
    targetAgent: 'Aisha Lim',
    status: 'Talking',
    duration: 432,
    extension: '1006',
  },
  {
    id: 7,
    callerId: '+60 11-223 3445',
    targetAgent: 'Rizal Tan',
    status: 'Talking',
    duration: 305,
    extension: '1007',
  },
  {
    id: 8,
    callerId: '+60 18-998 7766',
    targetAgent: 'Fatimah Wong',
    status: 'Hold',
    duration: 45,
    extension: '1008',
  },
  {
    id: 9,
    callerId: '+60 10-556 6778',
    targetAgent: 'Ismail Chen',
    status: 'Ringing',
    duration: 8,
    extension: '1009',
  },
  {
    id: 10,
    callerId: '+60 12-445 5667',
    targetAgent: 'Zainab Lee',
    status: 'Talking',
    duration: 156,
    extension: '1010',
  },
  {
    id: 11,
    callerId: '+60 13-778 8990',
    targetAgent: 'Farhan Ali',
    status: 'Talking',
    duration: 89,
    extension: '1011',
  },
  {
    id: 12,
    callerId: '+60 14-332 2110',
    targetAgent: 'Yasmin Ng',
    status: 'Hold',
    duration: 210,
    extension: '1012',
  },
  {
    id: 13,
    callerId: '+60 16-667 7889',
    targetAgent: 'Kumar Velu',
    status: 'Talking',
    duration: 12,
    extension: '1013',
  },
];

// CDR-derived daily metrics
export const dailyMetrics = {
  totalCalls: 1247,
  abandonedCalls: 43,
  aht: '4:32', // Average Handle Time in mm:ss
  serviceLevel: 94.2, // percentage
};

// Hourly call volume (mock Imagicle data)
export const hourlyCallVolume = [
  { hour: '08:00', calls: 45 },
  { hour: '09:00', calls: 89 },
  { hour: '10:00', calls: 124 },
  { hour: '11:00', calls: 156 },
  { hour: '12:00', calls: 98 },
  { hour: '13:00', calls: 87 },
  { hour: '14:00', calls: 134 },
  { hour: '15:00', calls: 167 },
  { hour: '16:00', calls: 143 },
  { hour: '17:00', calls: 112 },
  { hour: '18:00', calls: 78 },
  { hour: '19:00', calls: 34 },
];

// Agent states (simulating CTI websocket data)
export const initialAgents = [
  { id: 1, name: 'Ahmad Razak', state: 'Busy', extension: '1001' },
  { id: 2, name: 'Siti Aminah', state: 'Busy', extension: '1002' },
  { id: 3, name: 'Mohamed Faiz', state: 'Busy', extension: '1003' },
  { id: 4, name: 'Nurul Huda', state: 'Ready', extension: '1004' },
  { id: 5, name: 'Hafiz Rahman', state: 'Busy', extension: '1005' },
  { id: 6, name: 'Aisha Lim', state: 'Ready', extension: '1006' },
  { id: 7, name: 'Rizal Tan', state: 'Ready', extension: '1007' },
  { id: 8, name: 'Fatimah Wong', state: 'Paused', extension: '1008' },
  { id: 9, name: 'Ismail Chen', state: 'Ready', extension: '1009' },
  { id: 10, name: 'Zainab Lee', state: 'Busy', extension: '1010' },
  { id: 11, name: 'Farhan Ali', state: 'Ready', extension: '1011' },
  { id: 12, name: 'Yasmin Ng', state: 'Paused', extension: '1012' },
  { id: 13, name: 'Kenji Sato', state: 'Ready', extension: '1013' },
  { id: 14, name: 'Priya Kaur', state: 'Busy', extension: '1014' },
  { id: 15, name: 'Wei Ling', state: 'Busy', extension: '1015' },
  { id: 16, name: 'Azman Shah', state: 'Ready', extension: '1016' },
  { id: 17, name: 'Grace Tan', state: 'Busy', extension: '1017' },
  { id: 18, name: 'Mohan Raj', state: 'Paused', extension: '1018' },
  { id: 19, name: 'Nurul Aini', state: 'Ready', extension: '1019' },
  { id: 20, name: 'David Lee', state: 'Busy', extension: '1020' },
  { id: 21, name: 'Sarah Lim', state: 'Ready', extension: '1021' },
  { id: 22, name: 'Haris Omar', state: 'Busy', extension: '1022' },
];

// Status colors mapping
export const statusColors = {
  Ready: '#10B981',    // Emerald green
  Busy: '#F43F5E',     // Rose red
  Paused: '#F59E0B',   // Amber yellow
};

export const callStatusColors = {
  Talking: '#10B981',
  Ringing: '#FF1F1F',
  Hold: '#F59E0B',
};

// Call Queue Data
export const callQueues = [
  { id: 1, name: 'Sales Support', waiting: 12, longestWait: 245, agentsStaffed: 8, agentsTalking: 6 },
  { id: 2, name: 'Technical Help', waiting: 5, longestWait: 120, agentsStaffed: 12, agentsTalking: 10 },
  { id: 3, name: 'Billing Inquiry', waiting: 2, longestWait: 45, agentsStaffed: 5, agentsTalking: 3 },
  { id: 4, name: 'Emergency Line', waiting: 0, longestWait: 0, agentsStaffed: 4, agentsTalking: 1 },
  { id: 5, name: 'General Enquiries', waiting: 8, longestWait: 180, agentsStaffed: 6, agentsTalking: 5 },
];

// Parked Calls Data
export const parkedCalls = [
  { id: 1, callerId: '+60 12-345 6789', parkedBy: 'Ahmad Razak', parkedTime: '10:45 AM', duration: '05:23', extension: '1001' },
  { id: 2, callerId: '+60 17-889 0123', parkedBy: 'Siti Aminah', parkedTime: '10:48 AM', duration: '02:15', extension: '1002' },
  { id: 3, callerId: '+60 19-567 8901', parkedBy: 'Mohamed Ali', parkedTime: '10:49 AM', duration: '01:45', extension: '1003' },
  { id: 4, callerId: '+60 13-222 3333', parkedBy: 'Nurul Huda', parkedTime: '10:50 AM', duration: '00:30', extension: '1004' },
  { id: 5, callerId: '+60 16-444 5555', parkedBy: 'Hafiz Rahman', parkedTime: '10:42 AM', duration: '08:12', extension: '1005' },
  { id: 6, callerId: '+60 11-123 4567', parkedBy: 'Aisha Lim', parkedTime: '10:47 AM', duration: '03:55', extension: '1006' },
  { id: 7, callerId: '+60 18-987 6543', parkedBy: 'Chong Wei', parkedTime: '10:51 AM', duration: '00:05', extension: '1007' },
];
