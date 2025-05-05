import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type About = {
  __typename?: 'About';
  content?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type AppPermissionsDto = {
  __typename?: 'AppPermissionsDto';
  appName: Scalars['String']['output'];
  modules: Array<PermissionGroupDto>;
};

export type ApplicationModule = {
  __typename?: 'ApplicationModule';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type ApplicationModuleArray = {
  __typename?: 'ApplicationModuleArray';
  data: Array<ApplicationModule>;
};

export type ApplicationModuleUnion = ApplicationModule | ApplicationModuleArray;

export type Breakdown = {
  __typename?: 'Breakdown';
  breakdownDate: Scalars['DateTime']['output'];
  breakdownDescription?: Maybe<Scalars['String']['output']>;
  breakdownLocation: Scalars['String']['output'];
  breakdownType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  latitude: Scalars['String']['output'];
  longitude: Scalars['String']['output'];
  media: Array<BreakdownMedia>;
  status: Scalars['String']['output'];
  statuses: Array<BreakdownStatus>;
  updatedAt: Scalars['DateTime']['output'];
  vehicle: Vehicle;
  vehicleId: Scalars['Int']['output'];
};

export type BreakdownMedia = {
  __typename?: 'BreakdownMedia';
  breakdown: Breakdown;
  breakdownId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  mediaType: Scalars['String']['output'];
  mediaUrl: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BreakdownMediaDto = {
  breakdownId: Scalars['Float']['input'];
  mediaType?: InputMaybe<Scalars['String']['input']>;
  mediaUrl: Array<Scalars['String']['input']>;
};

export type BreakdownStatus = {
  __typename?: 'BreakdownStatus';
  approver?: Maybe<User>;
  approverId?: Maybe<Scalars['Float']['output']>;
  breakdown: Breakdown;
  breakdownId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  remark: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BreakdownStatusDto = {
  approverId?: InputMaybe<Scalars['Float']['input']>;
  assignId?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['Float']['input'];
  remark: Scalars['String']['input'];
  status: Breakdown_Status;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ChangePasswordDto = {
  currentPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type Coupon = {
  __typename?: 'Coupon';
  couponCode: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  discountValue?: Maybe<Scalars['Float']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  minOrderAmount?: Maybe<Scalars['Float']['output']>;
  startDate: Scalars['DateTime']['output'];
  status: Scalars['String']['output'];
  usageLimit: Scalars['Float']['output'];
};

export type CouponArray = {
  __typename?: 'CouponArray';
  data: Array<Coupon>;
};

export type CouponOrCoupons = Coupon | CouponArray;

/** Coupon Status */
export enum CouponStatus {
  Active = 'active',
  Expired = 'expired',
  Inactive = 'inactive',
  Used = 'used'
}

export type CouponStatusDto = {
  ids: Array<Scalars['Float']['input']>;
  status: CouponStatus;
};

export type CreateBreakdownDto = {
  breakdownDate: Scalars['String']['input'];
  breakdownDescription: Scalars['String']['input'];
  breakdownLocation: Scalars['String']['input'];
  breakdownType: Scalars['String']['input'];
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
  mediaUrl?: InputMaybe<Array<MediaDto>>;
  vehicleId: Scalars['Float']['input'];
};

export type CreateCouponDto = {
  couponCode: Scalars['String']['input'];
  description: Scalars['String']['input'];
  discountValue: Scalars['Float']['input'];
  endDate: Scalars['String']['input'];
  minOrderAmount: Scalars['Float']['input'];
  startDate: Scalars['String']['input'];
  usageLimit: Scalars['Float']['input'];
};

export type CreateFollowUpDto = {
  body: Scalars['String']['input'];
  subject: Scalars['String']['input'];
};

export type CreateMeetingDto = {
  attendees?: InputMaybe<Array<Scalars['Float']['input']>>;
  endTime: Scalars['String']['input'];
  meetingAgenda?: InputMaybe<Scalars['String']['input']>;
  meetingDate: Scalars['DateTime']['input'];
  meetingReference: Scalars['String']['input'];
  meetingTypeId: Scalars['Float']['input'];
  meetingUrl?: InputMaybe<Scalars['String']['input']>;
  meetingVenueId?: InputMaybe<Scalars['Float']['input']>;
  parentMeetingId?: InputMaybe<Scalars['Float']['input']>;
  projectId?: InputMaybe<Scalars['Float']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['String']['input'];
  title: Scalars['String']['input'];
  uploadDoc?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMeetingTaskDto = {
  assigneeId?: InputMaybe<Scalars['Float']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  completePercent?: InputMaybe<Scalars['Float']['input']>;
  completedDate?: InputMaybe<Scalars['DateTime']['input']>;
  dueDate: Scalars['DateTime']['input'];
  meetingId?: InputMaybe<Scalars['Float']['input']>;
  notesId?: InputMaybe<Scalars['Float']['input']>;
  openedDate: Scalars['DateTime']['input'];
  ownerId?: InputMaybe<Scalars['Float']['input']>;
  parentTaskId?: InputMaybe<Scalars['Float']['input']>;
  priority: Scalars['String']['input'];
  projectId?: InputMaybe<Scalars['Float']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  task?: InputMaybe<Scalars['String']['input']>;
  weightType?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMeetingTypeDto = {
  name: Scalars['String']['input'];
};

export type CreateMeetingVenueDto = {
  address: Scalars['String']['input'];
  contactNumber: Scalars['Float']['input'];
  contactPerson: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateModuleDto = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateMultipleOrderInput = {
  amount: Scalars['Float']['input'];
  couponCode?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['Float']['input'];
  planIds: Array<Scalars['Int']['input']>;
};

export type CreateNotePadDto = {
  notesField: Scalars['String']['input'];
};

export type CreateNotesDto = {
  decision?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  uploadDoc?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOfferDto = {
  description: Scalars['String']['input'];
  discountPercent?: InputMaybe<Scalars['Float']['input']>;
  discountValue?: InputMaybe<Scalars['Float']['input']>;
  endDate: Scalars['String']['input'];
  offerType?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['String']['input'];
  title: Scalars['String']['input'];
  usageLimit: Scalars['Float']['input'];
};

export type CreateOrganizationDto = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreatePackageDto = {
  description: Scalars['String']['input'];
  discountedPrice?: InputMaybe<Scalars['Float']['input']>;
  moduleIds: Array<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  offerDescription?: InputMaybe<Scalars['String']['input']>;
  offerExpiryDate?: InputMaybe<Scalars['String']['input']>;
  offerType?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
};

export type CreatePermissionDto = {
  action: Scalars['String']['input'];
  appName: AppName;
  description: Scalars['String']['input'];
  module: Scalars['String']['input'];
};

export type CreatePlanDto = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  discountedPrice?: InputMaybe<Scalars['Float']['input']>;
  duration: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  packageId: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
};

export type CreateProjectDto = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['Float']['input'];
};

export type CreateRoleDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissionIds: Array<Scalars['Float']['input']>;
};

export type CreateSubscriptionDto = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  discountedPrice?: InputMaybe<Scalars['Float']['input']>;
  duration: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  planIds: Array<Scalars['Int']['input']>;
  price: Scalars['Float']['input'];
};

export type CreateUserDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  designation: Designation;
  email: Scalars['String']['input'];
  mobileNo: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['Float']['input']>;
  roleIds: Array<Scalars['Int']['input']>;
  userType?: InputMaybe<UserType>;
};

export type CreateVehicleDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  chassisNumber: Scalars['String']['input'];
  color: Scalars['String']['input'];
  insurance: Scalars['Boolean']['input'];
  insuranceValidTill?: InputMaybe<Scalars['String']['input']>;
  maintenanceHistory?: InputMaybe<Scalars['String']['input']>;
  make: Scalars['String']['input'];
  model: Scalars['String']['input'];
  numberPlate: Scalars['String']['input'];
  year: Scalars['String']['input'];
};

export type CreateVehicleExpenseDto = {
  amount: Scalars['Float']['input'];
  breakDownId?: InputMaybe<Scalars['Float']['input']>;
  description: Scalars['String']['input'];
  expenseDate: Scalars['String']['input'];
  expenseType: Scalars['String']['input'];
  uploadDoc?: InputMaybe<Scalars['String']['input']>;
  vehicleId: Scalars['Float']['input'];
};

export type CreateWarehouseDto = {
  capacity: Scalars['Float']['input'];
  contactPerson?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['Float']['input'];
};

/** Custom Status */
export enum CustomStatus {
  Active = 'active',
  Blocked = 'blocked',
  Inactive = 'inactive',
  Pending = 'pending'
}

export type Dashboard = {
  __typename?: 'Dashboard';
  activeMeetings?: Maybe<Scalars['Int']['output']>;
  completedMeeting?: Maybe<Scalars['Int']['output']>;
  inactiveMeetings?: Maybe<Scalars['Int']['output']>;
  todayMeeting?: Maybe<Scalars['Int']['output']>;
  totalMeetings?: Maybe<Scalars['Int']['output']>;
  upComingMeeting?: Maybe<Scalars['Int']['output']>;
};

export type DashboardCount = {
  __typename?: 'DashboardCount';
  assignedPermissionCount?: Maybe<Scalars['Int']['output']>;
  couponCount?: Maybe<Scalars['Int']['output']>;
  moduleCount?: Maybe<Scalars['Int']['output']>;
  offerCount?: Maybe<Scalars['Int']['output']>;
  organizationCount?: Maybe<Scalars['Int']['output']>;
  packageCount?: Maybe<Scalars['Int']['output']>;
  packageModuleCount?: Maybe<Scalars['Int']['output']>;
  permissionCount?: Maybe<Scalars['Int']['output']>;
  planCount?: Maybe<Scalars['Int']['output']>;
  projectCount?: Maybe<Scalars['Int']['output']>;
  roleCount?: Maybe<Scalars['Int']['output']>;
  subscriptionCount?: Maybe<Scalars['Int']['output']>;
  subscriptionPlanCount?: Maybe<Scalars['Int']['output']>;
  userCount?: Maybe<Scalars['Int']['output']>;
};

export type DashboardFilters = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  month?: InputMaybe<Scalars['Float']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

/** User Designation Hierarchy */
export enum Designation {
  Ceo = 'CEO',
  Cto = 'CTO',
  Employee = 'EMPLOYEE',
  Hr = 'HR',
  Manager = 'MANAGER',
  SuperAdmin = 'SUPER_ADMIN',
  TeamLead = 'TEAM_LEAD'
}

export type DynamicPermissionsDto = {
  __typename?: 'DynamicPermissionsDto';
  apps: Array<AppPermissionsDto>;
};

export type FollowUp = {
  __typename?: 'FollowUp';
  body?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: User;
  createdById: Scalars['Float']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Float']['output'];
  subject?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Group = {
  __typename?: 'Group';
  name: Scalars['String']['output'];
  permissions: Array<Permissions>;
};

export type Inventory = {
  __typename?: 'Inventory';
  batchNumber?: Maybe<Scalars['String']['output']>;
  currentStock: Scalars['Float']['output'];
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  minStockLevel: Scalars['Float']['output'];
  openingStock: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  warehouse: Warehouse;
};

export type ListInputDto = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

export type LoginRes = {
  __typename?: 'LoginRes';
  accessToken: Scalars['String']['output'];
  user: User;
};

export type Material = {
  __typename?: 'Material';
  barcode?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  sku: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type MediaDto = {
  mediaType: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type Meeting = {
  __typename?: 'Meeting';
  attendees?: Maybe<Array<Scalars['Float']['output']>>;
  children?: Maybe<Array<Meeting>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: User;
  createdByUserId: Scalars['ID']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  endTime: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  meetingAgenda?: Maybe<Scalars['String']['output']>;
  meetingDate: Scalars['DateTime']['output'];
  meetingReference: Scalars['String']['output'];
  meetingType?: Maybe<MeetingType>;
  meetingTypeId: Scalars['Float']['output'];
  meetingUrl?: Maybe<Scalars['String']['output']>;
  meetingVenue?: Maybe<MeetingVenue>;
  meetingVenueId?: Maybe<Scalars['Float']['output']>;
  notes?: Maybe<Array<Notes>>;
  parentMeeting?: Maybe<Meeting>;
  parentMeetingId?: Maybe<Scalars['Float']['output']>;
  projectId?: Maybe<Scalars['Float']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  startTime: Scalars['String']['output'];
  status: Scalars['String']['output'];
  task?: Maybe<Array<MeetingTask>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  uploadDoc?: Maybe<Scalars['String']['output']>;
};

export type MeetingArray = {
  __typename?: 'MeetingArray';
  data: Array<Meeting>;
};

export type MeetingFiltersDto = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MeetingOrMeetings = Meeting | MeetingArray;

/** Meeting  Status */
export enum MeetingStatus {
  Active = 'active',
  Completed = 'completed',
  Inactive = 'inactive'
}

export type MeetingStatusDto = {
  ids: Array<Scalars['Float']['input']>;
  status: MeetingStatus;
};

export type MeetingTask = {
  __typename?: 'MeetingTask';
  assigneeId?: Maybe<Scalars['Float']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  completePercent?: Maybe<Scalars['Float']['output']>;
  completedDate?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  dueDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  meetingId?: Maybe<Scalars['Float']['output']>;
  meetingTask?: Maybe<Meeting>;
  notesId?: Maybe<Scalars['Float']['output']>;
  notesTask?: Maybe<Notes>;
  openedDate: Scalars['DateTime']['output'];
  ownerId?: Maybe<Scalars['Float']['output']>;
  parentTask?: Maybe<MeetingTask>;
  parentTaskId?: Maybe<Scalars['Float']['output']>;
  priority: Scalars['String']['output'];
  projectId?: Maybe<Scalars['Float']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  subtasks?: Maybe<Array<MeetingTask>>;
  task?: Maybe<Scalars['String']['output']>;
  totalTaskComplete?: Maybe<Scalars['Float']['output']>;
  weightType?: Maybe<Scalars['String']['output']>;
};

export type MeetingTaskArray = {
  __typename?: 'MeetingTaskArray';
  data: Array<MeetingTask>;
};

export type MeetingTaskFiltersDto = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MeetingTaskOrMeetingTasks = MeetingTask | MeetingTaskArray;

/** Meeting Task Status */
export enum MeetingTaskStatus {
  Approved = 'approved',
  Completed = 'completed',
  InProgress = 'in_progress',
  NotStarted = 'not_started',
  Rejected = 'rejected'
}

export type MeetingTaskStatusDto = {
  completePercent?: InputMaybe<Scalars['Float']['input']>;
  ids: Array<Scalars['Float']['input']>;
  status: MeetingTaskStatus;
};

export type MeetingType = {
  __typename?: 'MeetingType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type MeetingVenue = {
  __typename?: 'MeetingVenue';
  address?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['Float']['output']>;
  contactPerson?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Meta = {
  __typename?: 'Meta';
  currentPage: Scalars['Int']['output'];
  limit: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Module = {
  __typename?: 'Module';
  groups: Array<Group>;
  name: Scalars['String']['output'];
};

export type ModuleStatusDto = {
  ids: Array<Scalars['Float']['input']>;
  status: CustomStatus;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMediaToBreakdown: Array<BreakdownMedia>;
  applyCouponToPlan: Plan;
  assignModuleToPkg: Package;
  assignPermissionsToRole: Role;
  assignPlanToSubscription: Subscriptions;
  assignRoleToUser: User;
  changeBreakdownStatus: BreakdownStatus;
  changeCouponStatus: CouponOrCoupons;
  changeModuleStatus: ApplicationModuleUnion;
  changeOfferStatus: OfferUnion;
  changePackageStatus: PackageUnion;
  changePassword: Scalars['Boolean']['output'];
  changePlanStatus: PlanOrPlans;
  changeRoleStatus: RoleUnion;
  changeSubscriptionStatus: SubscriptionsUnion;
  changeUserStatus: UserUnion;
  changeVehicleExpenseStatus: VehicleExpenseStatus;
  changeWarehouseStatus: Warehouse;
  createAbout: About;
  createBreakdown: Breakdown;
  createCoupon: Coupon;
  createFollowUp: FollowUp;
  createMeeting: Meeting;
  createMeetingTask: MeetingTask;
  createMeetingType: MeetingType;
  createMeetingVenue: MeetingVenue;
  createModule: ApplicationModule;
  createMultipleOrder: Scalars['JSONObject']['output'];
  createNotePad: NotePad;
  createNotes: Array<Notes>;
  createOffer: Offer;
  createOrganization: Organization;
  createPackage: Package;
  createPermission: Permissions;
  createPlan: Plan;
  createProject: Project;
  createRole: Role;
  createSubTasks: Array<MeetingTask>;
  createSubscription: Subscriptions;
  createSubscriptionWithPlans: Subscriptions;
  createUser: User;
  createVehicle: Vehicle;
  createVehicleExpense: VehicleExpense;
  createWarehouse: Warehouse;
  deleteAbout: Scalars['Boolean']['output'];
  deleteBreakdown: Scalars['Boolean']['output'];
  deleteCoupon: Scalars['Boolean']['output'];
  deleteFollowUp: Scalars['Boolean']['output'];
  deleteMeting: Scalars['Boolean']['output'];
  deleteMetingTask: Scalars['Boolean']['output'];
  deleteMetingType: Scalars['Boolean']['output'];
  deleteMetingVenue: Scalars['Boolean']['output'];
  deleteModule: Scalars['Boolean']['output'];
  deleteNotePad: Scalars['Boolean']['output'];
  deleteNotes: Scalars['Boolean']['output'];
  deleteOffer: Scalars['Boolean']['output'];
  deleteOrganization: Scalars['Boolean']['output'];
  deletePackage: Scalars['Boolean']['output'];
  deletePermission: Scalars['Boolean']['output'];
  deletePlan: Scalars['Boolean']['output'];
  deleteProject: Scalars['Boolean']['output'];
  deleteRole: Scalars['Boolean']['output'];
  deleteSubscription: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  deleteVehicle: Scalars['Boolean']['output'];
  deleteVehicleExpense: Scalars['Boolean']['output'];
  deleteWarehouse: Scalars['Boolean']['output'];
  enableMeetingStatus: MeetingOrMeetings;
  enableMeetingTaskStatus: MeetingTaskOrMeetingTasks;
  enableNotePad: NotePadOrNotePads;
  enableOrganizationStatus: OrganizationUnion;
  enableProjectStatus: ProjectUnion;
  enableVehicleStatus: Vehicle;
  forgotPassword: Scalars['Boolean']['output'];
  hardDeleteCoupon: Scalars['Boolean']['output'];
  hardDeleteFollowUp: Scalars['Boolean']['output'];
  hardDeleteMeeting: Scalars['Boolean']['output'];
  hardDeleteMeetingTask: Scalars['Boolean']['output'];
  hardDeleteMeetingType: Scalars['Boolean']['output'];
  hardDeleteMeetingVenue: Scalars['Boolean']['output'];
  hardDeleteModule: Scalars['Boolean']['output'];
  hardDeleteNotePad: Scalars['Boolean']['output'];
  hardDeleteNotes: Scalars['Boolean']['output'];
  hardDeleteOffer: Scalars['Boolean']['output'];
  hardDeleteOrganization: Scalars['Boolean']['output'];
  hardDeletePackage: Scalars['Boolean']['output'];
  hardDeletePlan: Scalars['Boolean']['output'];
  hardDeleteProject: Scalars['Boolean']['output'];
  hardDeleteRole: Scalars['Boolean']['output'];
  hardDeleteSubscription: Scalars['Boolean']['output'];
  hardDeleteUser: Scalars['Boolean']['output'];
  hardDeleteWarehouse: Scalars['Boolean']['output'];
  login: LoginRes;
  logout: Scalars['Boolean']['output'];
  register: LoginRes;
  requestOtp: OtpRes;
  resetPassword: Scalars['Boolean']['output'];
  restoreCoupon: Scalars['Boolean']['output'];
  restoreMeeting: Scalars['Boolean']['output'];
  restoreMeetingTask: Scalars['Boolean']['output'];
  restoreMeetingType: Scalars['Boolean']['output'];
  restoreMeetingVenue: Scalars['Boolean']['output'];
  restoreModule: Scalars['Boolean']['output'];
  restoreNotePad: Scalars['Boolean']['output'];
  restoreNotes: Scalars['Boolean']['output'];
  restoreOffer: Scalars['Boolean']['output'];
  restoreOrganization: Scalars['Boolean']['output'];
  restorePackage: Scalars['Boolean']['output'];
  restorePlan: Scalars['Boolean']['output'];
  restoreProject: Scalars['Boolean']['output'];
  restoreRole: Scalars['Boolean']['output'];
  restoreSubscription: Scalars['Boolean']['output'];
  restoreUser: Scalars['Boolean']['output'];
  restoreVehicle: Scalars['Boolean']['output'];
  restoreVehicleBreakdown: Scalars['Boolean']['output'];
  restoreVehicleExpense: Scalars['Boolean']['output'];
  restoreWarehouse: Scalars['Boolean']['output'];
  sendRegistrationOtp: OtpRes;
  updateAbout: About;
  updateBreakdown: Breakdown;
  updateCoupon: Coupon;
  updateFollowUp: FollowUp;
  updateMeeting: Meeting;
  updateMeetingTask: MeetingTask;
  updateMeetingType: MeetingType;
  updateMeetingVenue: MeetingVenue;
  updateModule: ApplicationModule;
  updateNotePad: NotePad;
  updateNotes: Notes;
  updateOffer: Offer;
  updateOrganization: Organization;
  updatePackage: Package;
  updatePermission: Permissions;
  updatePlan: Plan;
  updateProfile: User;
  updateProject: Project;
  updateRole: Role;
  updateSubscription: Subscriptions;
  updateUser: User;
  updateVehicle: Vehicle;
  updateVehicleExpense: VehicleExpense;
  updateWarehouse: Warehouse;
  verifyPayment: Array<Subscriptions>;
};


export type MutationAddMediaToBreakdownArgs = {
  data: BreakdownMediaDto;
};


export type MutationApplyCouponToPlanArgs = {
  couponCode: Scalars['String']['input'];
  planId: Scalars['Int']['input'];
};


export type MutationAssignModuleToPkgArgs = {
  moduleIds: Array<Scalars['Int']['input']>;
  packageId: Scalars['Int']['input'];
};


export type MutationAssignPermissionsToRoleArgs = {
  permissionIds: Array<Scalars['Int']['input']>;
  roleId: Scalars['Int']['input'];
};


export type MutationAssignPlanToSubscriptionArgs = {
  SubscriptionId: Scalars['Int']['input'];
  planIds: Array<Scalars['Int']['input']>;
};


export type MutationAssignRoleToUserArgs = {
  roleIds: Array<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type MutationChangeBreakdownStatusArgs = {
  data: BreakdownStatusDto;
};


export type MutationChangeCouponStatusArgs = {
  updateCouponStatusInput: CouponStatusDto;
};


export type MutationChangeModuleStatusArgs = {
  updateModuleStatusInput: ModuleStatusDto;
};


export type MutationChangeOfferStatusArgs = {
  updateOfferStatusInput: OfferStatusDto;
};


export type MutationChangePackageStatusArgs = {
  updatePackageStatusInput: PackageStatusDto;
};


export type MutationChangePasswordArgs = {
  changePasswordData: ChangePasswordDto;
};


export type MutationChangePlanStatusArgs = {
  updatePlanStatusInput: PlanStatusDto;
};


export type MutationChangeRoleStatusArgs = {
  data: RoleStatusDto;
};


export type MutationChangeSubscriptionStatusArgs = {
  updateSubscriptionStatusInput: SubscriptionStatusDto;
};


export type MutationChangeUserStatusArgs = {
  data: UserStatusDto;
};


export type MutationChangeVehicleExpenseStatusArgs = {
  data: VehicleExpenseStatusDto;
};


export type MutationChangeWarehouseStatusArgs = {
  data: WarehouseStatusDto;
};


export type MutationCreateBreakdownArgs = {
  data: CreateBreakdownDto;
};


export type MutationCreateCouponArgs = {
  createCouponInput: CreateCouponDto;
};


export type MutationCreateFollowUpArgs = {
  data: CreateFollowUpDto;
};


export type MutationCreateMeetingArgs = {
  data: CreateMeetingDto;
};


export type MutationCreateMeetingTaskArgs = {
  input: CreateMeetingTaskDto;
};


export type MutationCreateMeetingTypeArgs = {
  data: CreateMeetingTypeDto;
};


export type MutationCreateMeetingVenueArgs = {
  data: CreateMeetingVenueDto;
};


export type MutationCreateModuleArgs = {
  createModuleInput: CreateModuleDto;
};


export type MutationCreateMultipleOrderArgs = {
  input: CreateMultipleOrderInput;
};


export type MutationCreateNotePadArgs = {
  notesData: CreateNotePadDto;
};


export type MutationCreateNotesArgs = {
  notesData: Array<CreateNotesDto>;
};


export type MutationCreateOfferArgs = {
  createOfferInput: CreateOfferDto;
};


export type MutationCreateOrganizationArgs = {
  createOrganizationInput: CreateOrganizationDto;
};


export type MutationCreatePackageArgs = {
  createPackageInput: CreatePackageDto;
};


export type MutationCreatePermissionArgs = {
  data: CreatePermissionDto;
};


export type MutationCreatePlanArgs = {
  createPlanInput: CreatePlanDto;
};


export type MutationCreateProjectArgs = {
  createProjectInput: CreateProjectDto;
};


export type MutationCreateRoleArgs = {
  data: CreateRoleDto;
};


export type MutationCreateSubTasksArgs = {
  input: Array<CreateMeetingTaskDto>;
};


export type MutationCreateSubscriptionArgs = {
  createSubscriptionInput: CreateSubscriptionDto;
};


export type MutationCreateSubscriptionWithPlansArgs = {
  createSubscriptionInput: CreateSubscriptionDto;
  planIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type MutationCreateUserArgs = {
  data: CreateUserDto;
};


export type MutationCreateVehicleArgs = {
  createVehicleInput: CreateVehicleDto;
};


export type MutationCreateVehicleExpenseArgs = {
  data: CreateVehicleExpenseDto;
};


export type MutationCreateWarehouseArgs = {
  CreateWarehouseDto: CreateWarehouseDto;
};


export type MutationDeleteBreakdownArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCouponArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteFollowUpArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteMetingArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteMetingTaskArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteMetingTypeArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteMetingVenueArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteModuleArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteNotePadArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteNotesArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteOfferArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteOrganizationArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeletePackageArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeletePermissionArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeletePlanArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteProjectArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteRoleArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteSubscriptionArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteUserArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationDeleteVehicleArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteVehicleExpenseArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['Float']['input'];
};


export type MutationEnableMeetingStatusArgs = {
  updateMeetingStatusInput: MeetingStatusDto;
};


export type MutationEnableMeetingTaskStatusArgs = {
  updateMeetingTaskStatusInput: MeetingTaskStatusDto;
};


export type MutationEnableNotePadArgs = {
  updateMeetingStatusInput: NotePadStatusDto;
};


export type MutationEnableOrganizationStatusArgs = {
  data: OrganizationStatusDto;
};


export type MutationEnableProjectStatusArgs = {
  data: ProjectStatusDto;
};


export type MutationEnableVehicleStatusArgs = {
  data: VehicleStatusDto;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationHardDeleteCouponArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteFollowUpArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteMeetingArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteMeetingTaskArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteMeetingTypeArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteMeetingVenueArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteModuleArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteNotePadArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteNotesArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteOfferArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteOrganizationArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeletePackageArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeletePlanArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteProjectArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteRoleArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteSubscriptionArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteUserArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationHardDeleteWarehouseArgs = {
  id: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  loginData: ValidateDto;
};


export type MutationRegisterArgs = {
  registerData: RegisterDto;
};


export type MutationRequestOtpArgs = {
  otpRequestData: OtpRequestDto;
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  reset: ValidateDto;
};


export type MutationRestoreCouponArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreMeetingArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreMeetingTaskArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreMeetingTypeArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreMeetingVenueArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreModuleArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreNotePadArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreNotesArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreOfferArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreOrganizationArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestorePackageArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestorePlanArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreProjectArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreRoleArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreSubscriptionArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreUserArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationRestoreVehicleArgs = {
  id: Scalars['Float']['input'];
};


export type MutationRestoreVehicleBreakdownArgs = {
  id: Scalars['Float']['input'];
};


export type MutationRestoreVehicleExpenseArgs = {
  id: Scalars['Float']['input'];
};


export type MutationRestoreWarehouseArgs = {
  id: Scalars['Float']['input'];
};


export type MutationSendRegistrationOtpArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateBreakdownArgs = {
  data: UpdateBreakdownDto;
};


export type MutationUpdateCouponArgs = {
  updateCouponInput: UpdateCouponDto;
};


export type MutationUpdateFollowUpArgs = {
  updateFollowUpInput: UpdateFollowUpDto;
};


export type MutationUpdateMeetingArgs = {
  updateMeetingInput: UpdateMeetingDto;
};


export type MutationUpdateMeetingTaskArgs = {
  updateMeetingTaskInput: UpdateMeetingTaskDto;
};


export type MutationUpdateMeetingTypeArgs = {
  updateMeetingTypeInput: UpdateMeetingTypeDto;
};


export type MutationUpdateMeetingVenueArgs = {
  updateMeetingVenueInput: UpdateMeetingVenueDto;
};


export type MutationUpdateModuleArgs = {
  updateModuleInput: UpdateModuleDto;
};


export type MutationUpdateNotePadArgs = {
  updateNotesInput: UpdateNotePadDto;
};


export type MutationUpdateNotesArgs = {
  updateNotesInput: UpdateNotesDto;
};


export type MutationUpdateOfferArgs = {
  updateOfferInput: UpdateOfferDto;
};


export type MutationUpdateOrganizationArgs = {
  updateOrganizationInput: UpdateOrganizationDto;
};


export type MutationUpdatePackageArgs = {
  updatePackageInput: UpdatePackageDto;
};


export type MutationUpdatePermissionArgs = {
  data: UpdatePermissionDto;
};


export type MutationUpdatePlanArgs = {
  updatePlanInput: UpdatePlanDto;
};


export type MutationUpdateProfileArgs = {
  data: UpdateUserDto;
};


export type MutationUpdateProjectArgs = {
  updateProjectInput: UpdateProjectDto;
};


export type MutationUpdateRoleArgs = {
  data: UpdateRoleDto;
};


export type MutationUpdateSubscriptionArgs = {
  updateSubscriptionInput: UpdateSubscriptionDto;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserDto;
};


export type MutationUpdateVehicleArgs = {
  updateVehicleInput: UpdateVehicleDto;
};


export type MutationUpdateVehicleExpenseArgs = {
  updateVehicleExpenseInput: UpdateVehicleExpenseDto;
};


export type MutationUpdateWarehouseArgs = {
  UpdateWarehouseDto: UpdateWarehouseDto;
};


export type MutationVerifyPaymentArgs = {
  input: VerifyPaymentInput;
};

export type NotePad = {
  __typename?: 'NotePad';
  UserId: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdUser: User;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  notesField?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type NotePadArray = {
  __typename?: 'NotePadArray';
  data: Array<NotePad>;
};

export type NotePadOrNotePads = NotePad | NotePadArray;

/** NotePad Status */
export enum NotePadStatus {
  Completed = 'completed',
  Pending = 'pending'
}

export type NotePadStatusDto = {
  ids: Array<Scalars['Float']['input']>;
  status: NotePadStatus;
};

export type Notes = {
  __typename?: 'Notes';
  createdAt: Scalars['DateTime']['output'];
  decision?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  meeting?: Maybe<Meeting>;
  meetingId?: Maybe<Scalars['Float']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Array<MeetingTask>>;
  uploadDoc?: Maybe<Scalars['String']['output']>;
};

export type Offer = {
  __typename?: 'Offer';
  description?: Maybe<Scalars['String']['output']>;
  discountPercent?: Maybe<Scalars['Float']['output']>;
  discountValue?: Maybe<Scalars['Float']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  offerType?: Maybe<Scalars['String']['output']>;
  startDate: Scalars['DateTime']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  usageLimit: Scalars['Float']['output'];
};

export type OfferArray = {
  __typename?: 'OfferArray';
  data: Array<Offer>;
};

/** OFFER STATUS */
export enum OfferStatus {
  Active = 'active',
  Expired = 'expired',
  Inactive = 'inactive'
}

export type OfferStatusDto = {
  ids: Array<Scalars['Float']['input']>;
  status: OfferStatus;
};

export type OfferUnion = Offer | OfferArray;

export type Organization = {
  __typename?: 'Organization';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type OrganizationArray = {
  __typename?: 'OrganizationArray';
  data: Array<Organization>;
};

export type OrganizationStatusDto = {
  ids: Array<Scalars['Float']['input']>;
  status: CustomStatus;
};

export type OrganizationUnion = Organization | OrganizationArray;

export type OtpRequestDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type OtpRes = {
  __typename?: 'OtpRes';
  message?: Maybe<Scalars['String']['output']>;
  otp?: Maybe<Scalars['Float']['output']>;
  otpGeneratedSuccessfully: Scalars['Boolean']['output'];
};

export type Package = {
  __typename?: 'Package';
  description?: Maybe<Scalars['String']['output']>;
  discountedPrice: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  modules: Array<ApplicationModule>;
  name: Scalars['String']['output'];
  offerDescription?: Maybe<Scalars['String']['output']>;
  offerExpiryDate?: Maybe<Scalars['DateTime']['output']>;
  offerType?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  status: Scalars['String']['output'];
};

export type PackageArray = {
  __typename?: 'PackageArray';
  data: Array<Package>;
};

/** Package Status */
export enum PackageStatus {
  Active = 'active',
  Expired = 'expired',
  Inactive = 'inactive'
}

export type PackageStatusDto = {
  ids: Array<Scalars['Float']['input']>;
  status: PackageStatus;
};

export type PackageUnion = Package | PackageArray;

export type PaginatedApplicationModules = {
  __typename?: 'PaginatedApplicationModules';
  data: Array<ApplicationModule>;
  meta: Meta;
};

export type PaginatedBreakdowns = {
  __typename?: 'PaginatedBreakdowns';
  data: Array<Breakdown>;
  meta: Meta;
};

export type PaginatedCoupons = {
  __typename?: 'PaginatedCoupons';
  data: Array<Coupon>;
  meta: Meta;
};

export type PaginatedFollowUp = {
  __typename?: 'PaginatedFollowUp';
  data: Array<FollowUp>;
  meta: Meta;
};

export type PaginatedMeeting = {
  __typename?: 'PaginatedMeeting';
  data: Array<Meeting>;
  meta: Meta;
};

export type PaginatedMeetingTask = {
  __typename?: 'PaginatedMeetingTask';
  data: Array<MeetingTask>;
  meta: Meta;
};

export type PaginatedMeetingType = {
  __typename?: 'PaginatedMeetingType';
  data: Array<MeetingType>;
  meta: Meta;
};

export type PaginatedMeetingVenue = {
  __typename?: 'PaginatedMeetingVenue';
  data: Array<MeetingVenue>;
  meta: Meta;
};

export type PaginatedNotePad = {
  __typename?: 'PaginatedNotePad';
  data: Array<NotePad>;
  meta: Meta;
};

export type PaginatedNotes = {
  __typename?: 'PaginatedNotes';
  data: Array<Notes>;
  meta: Meta;
};

export type PaginatedOffers = {
  __typename?: 'PaginatedOffers';
  data: Array<Offer>;
  meta: Meta;
};

export type PaginatedOrganizations = {
  __typename?: 'PaginatedOrganizations';
  data: Array<Organization>;
  meta: Meta;
};

export type PaginatedPackages = {
  __typename?: 'PaginatedPackages';
  data: Array<Package>;
  meta: Meta;
};

export type PaginatedPermissions = {
  __typename?: 'PaginatedPermissions';
  data: Array<Permissions>;
  meta: Meta;
};

export type PaginatedPlans = {
  __typename?: 'PaginatedPlans';
  data: Array<Plan>;
  meta: Meta;
};

export type PaginatedProjects = {
  __typename?: 'PaginatedProjects';
  data: Array<Project>;
  meta: Meta;
};

export type PaginatedRoles = {
  __typename?: 'PaginatedRoles';
  data: Array<Role>;
  meta: Meta;
};

export type PaginatedSubscriptions = {
  __typename?: 'PaginatedSubscriptions';
  data: Array<Subscriptions>;
  meta: Meta;
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  data: Array<User>;
  meta: Meta;
};

export type PaginatedVehicleExpense = {
  __typename?: 'PaginatedVehicleExpense';
  data: Array<VehicleExpense>;
  meta: Meta;
};

export type PaginatedVehicles = {
  __typename?: 'PaginatedVehicles';
  data: Array<Vehicle>;
  meta: Meta;
};

export type PaginatedWarehouse = {
  __typename?: 'PaginatedWarehouse';
  data: Array<Warehouse>;
  meta: Meta;
};

export type PermissionDto = {
  __typename?: 'PermissionDto';
  action: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  module: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type PermissionGroup = {
  __typename?: 'PermissionGroup';
  modules: Array<Module>;
};

export type PermissionGroupDto = {
  __typename?: 'PermissionGroupDto';
  name: Scalars['String']['output'];
  permissions: Array<PermissionDto>;
};

export type Permissions = {
  __typename?: 'Permissions';
  action: Scalars['String']['output'];
  appName: Scalars['String']['output'];
  description: Scalars['String']['output'];
  groupName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  module: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type Plan = {
  __typename?: 'Plan';
  coupon?: Maybe<Coupon>;
  couponCode?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountedPrice?: Maybe<Scalars['Float']['output']>;
  duration: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  package?: Maybe<Package>;
  price: Scalars['Float']['output'];
  status: Scalars['String']['output'];
};

export type PlanArray = {
  __typename?: 'PlanArray';
  data: Array<Plan>;
};

export type PlanOrPlans = Plan | PlanArray;

/** Plan Status */
export enum PlanStatus {
  Active = 'active',
  Expired = 'expired',
  Inactive = 'inactive'
}

export type PlanStatusDto = {
  ids: Array<Scalars['Float']['input']>;
  status: PlanStatus;
};

export type Post = {
  __typename?: 'Post';
  authorId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  user: User;
};

export type Project = {
  __typename?: 'Project';
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  organizationId: Scalars['Float']['output'];
  status: Scalars['String']['output'];
};

export type ProjectArray = {
  __typename?: 'ProjectArray';
  data: Array<Project>;
};

export type ProjectStatusDto = {
  ids: Array<Scalars['Float']['input']>;
  status: CustomStatus;
};

export type ProjectUnion = Project | ProjectArray;

export type Query = {
  __typename?: 'Query';
  MeetingCalender: Array<Meeting>;
  MeetingHierarchyTree: Array<Meeting>;
  MeetingTaskCalender: Array<MeetingTask>;
  allPermissions: DynamicPermissionsDto;
  breakdownDropdown: PaginatedBreakdowns;
  couponsDropdown: PaginatedCoupons;
  dashboardCount: DashboardCount;
  dashboardMeetingTaskStatus: PaginatedMeetingTask;
  dashboardVehicleCount: VehicleDashboardCount;
  dropDownMeeting: PaginatedMeeting;
  dropDownMeetingTask: PaginatedMeetingTask;
  dropDownMeetingType: PaginatedMeetingType;
  dropDownMeetingVenue: PaginatedMeetingVenue;
  dropDownNotes: PaginatedNotes;
  dropdownOffers: PaginatedOffers;
  findBreakdownById: Breakdown;
  findCouponById: Coupon;
  findModuleById: ApplicationModule;
  findOfferById: Offer;
  findOrganizationById: Organization;
  findPackageById: Package;
  findPermissionById: Permissions;
  findPermissionsByUser: Array<Scalars['String']['output']>;
  findPlanById: Plan;
  findRoleById: Role;
  findSubscriptionById: Subscriptions;
  findUserById: User;
  findVehicleById: Vehicle;
  findVehicleExpenseById: VehicleExpense;
  findWarehouseById: Warehouse;
  getAboutById: About;
  getAllAbout: Array<About>;
  getAllMeetingTypes: Array<MeetingType>;
  getAllNotePad: Array<NotePad>;
  getBreakdownStatuses: Array<BreakdownStatus>;
  getBreakdownTypeSuggestions: Array<Scalars['JSON']['output']>;
  getFollowUpById: FollowUp;
  getMeetingDashboard: Dashboard;
  getMeetingId: Meeting;
  getMeetingIdTask: MeetingTask;
  getMeetingType: MeetingType;
  getMeetingVenue: MeetingVenue;
  getNotePadById: NotePad;
  getNotesId: Notes;
  getPaginatedMeetingTaskByMeetingId: PaginatedMeetingTask;
  getPaginatedNotesByMeetingId: PaginatedNotes;
  getUpcomingMeetingTask: PaginatedMeetingTask;
  getUpcomingMeetings: PaginatedMeeting;
  getVehicleExpenseStatuses: Array<VehicleExpenseStatus>;
  getVehicleExpenseTypeSuggestions: Array<Scalars['JSON']['output']>;
  listTrashedFollowUp: PaginatedFollowUp;
  listTrashedMeeting: PaginatedMeeting;
  listTrashedMeetingTask: PaginatedMeetingTask;
  listTrashedMeetingType: PaginatedMeetingType;
  listTrashedMeetingVenue: PaginatedMeetingVenue;
  listTrashedNotePad: PaginatedNotePad;
  listTrashedNotes: PaginatedNotes;
  listTrashedOrganizations: PaginatedOrganizations;
  listTrashedProjects: PaginatedProjects;
  listTrashedRoles: PaginatedRoles;
  packagesDropdown: PaginatedPackages;
  paginatedBreakdowns: PaginatedBreakdowns;
  paginatedCoupons: PaginatedCoupons;
  paginatedFollowUp: PaginatedFollowUp;
  paginatedMeeting: PaginatedMeeting;
  paginatedMeetingParentId: PaginatedMeeting;
  paginatedMeetingSubTask: PaginatedMeetingTask;
  paginatedMeetingTask: PaginatedMeetingTask;
  paginatedMeetingType: PaginatedMeetingType;
  paginatedMeetingVenue: PaginatedMeetingVenue;
  paginatedMeetingsForUserId: PaginatedMeeting;
  paginatedModules: PaginatedApplicationModules;
  paginatedNotePad: PaginatedNotePad;
  paginatedNotes: PaginatedNotes;
  paginatedOffers: PaginatedOffers;
  paginatedOrganization: PaginatedOrganizations;
  paginatedPackages: PaginatedPackages;
  paginatedPermissions: PaginatedPermissions;
  paginatedPlans: PaginatedPlans;
  paginatedPlansForList: PaginatedPlans;
  paginatedProjects: PaginatedProjects;
  paginatedRoles: PaginatedRoles;
  paginatedSubscriptions: PaginatedSubscriptions;
  paginatedTrashedWarehouses: PaginatedWarehouse;
  paginatedUsers: PaginatedUsers;
  paginatedVehicleExpense: PaginatedVehicleExpense;
  paginatedVehicles: PaginatedVehicles;
  paginatedWarehouses: PaginatedWarehouse;
  permissionGroup: PermissionGroup;
  post: Post;
  posts: Array<Post>;
  project: Project;
  trashedCoupons: PaginatedCoupons;
  trashedModules: PaginatedApplicationModules;
  trashedOffers: PaginatedOffers;
  trashedPackages: PaginatedPackages;
  trashedPlans: PaginatedPlans;
  trashedSubscriptions: PaginatedSubscriptions;
  trashedUsers: PaginatedUsers;
  userHierarchy: Array<User>;
  vehiclesDropdown: PaginatedVehicles;
};


export type QueryMeetingCalenderArgs = {
  filters?: InputMaybe<MeetingFiltersDto>;
};


export type QueryMeetingHierarchyTreeArgs = {
  nameFilter?: InputMaybe<Scalars['String']['input']>;
  parentMeetingId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMeetingTaskCalenderArgs = {
  filters?: InputMaybe<MeetingTaskFiltersDto>;
};


export type QueryBreakdownDropdownArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryCouponsDropdownArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryDashboardCountArgs = {
  filters: ReportFilters;
};


export type QueryDashboardMeetingTaskStatusArgs = {
  query: ListInputDto;
  status?: InputMaybe<Array<MeetingTaskStatus>>;
};


export type QueryDashboardVehicleCountArgs = {
  filters: ReportFilters;
};


export type QueryDropDownMeetingArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryDropDownMeetingTaskArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryDropDownMeetingTypeArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryDropDownMeetingVenueArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryDropDownNotesArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryDropdownOffersArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryFindBreakdownByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindCouponByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindModuleByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindOfferByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindOrganizationByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindPackageByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindPermissionByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryFindPermissionsByUserArgs = {
  id: Scalars['Float']['input'];
};


export type QueryFindPlanByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindRoleByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryFindSubscriptionByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryFindVehicleByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindVehicleExpenseByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindWarehouseByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetBreakdownStatusesArgs = {
  breakdownId: Scalars['Int']['input'];
};


export type QueryGetBreakdownTypeSuggestionsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetFollowUpByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetMeetingDashboardArgs = {
  filters?: InputMaybe<DashboardFilters>;
};


export type QueryGetMeetingIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetMeetingIdTaskArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetMeetingTypeArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetMeetingVenueArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetNotePadByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetNotesIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetPaginatedMeetingTaskByMeetingIdArgs = {
  meetingId: Scalars['Int']['input'];
  query: ListInputDto;
};


export type QueryGetPaginatedNotesByMeetingIdArgs = {
  meetingId: Scalars['Int']['input'];
  query: ListInputDto;
};


export type QueryGetUpcomingMeetingTaskArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryGetUpcomingMeetingsArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryGetVehicleExpenseStatusesArgs = {
  expenseId: Scalars['Int']['input'];
};


export type QueryGetVehicleExpenseTypeSuggestionsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListTrashedFollowUpArgs = {
  ListInputDto: ListInputDto;
};


export type QueryListTrashedMeetingArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryListTrashedMeetingTaskArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryListTrashedMeetingTypeArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryListTrashedMeetingVenueArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryListTrashedNotePadArgs = {
  ListInputDto: ListInputDto;
};


export type QueryListTrashedNotesArgs = {
  ListInputDto: ListInputDto;
};


export type QueryListTrashedOrganizationsArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryListTrashedProjectsArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryListTrashedRolesArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPackagesDropdownArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedBreakdownsArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedCouponsArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedFollowUpArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedMeetingArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedMeetingParentIdArgs = {
  parentMeetingId: Scalars['Int']['input'];
  query: ListInputDto;
};


export type QueryPaginatedMeetingSubTaskArgs = {
  parentTaskId: Scalars['Int']['input'];
  query: ListInputDto;
};


export type QueryPaginatedMeetingTaskArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedMeetingTypeArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedMeetingVenueArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedMeetingsForUserIdArgs = {
  query: ListInputDto;
  userId: Scalars['Int']['input'];
};


export type QueryPaginatedModulesArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedNotePadArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedNotesArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedOffersArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedOrganizationArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedPackagesArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedPermissionsArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedPlansArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedPlansForListArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedProjectsArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedRolesArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedSubscriptionsArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedTrashedWarehousesArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedUsersArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedVehicleExpenseArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedVehiclesArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPaginatedWarehousesArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProjectArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTrashedCouponsArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryTrashedModulesArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryTrashedOffersArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryTrashedPackagesArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryTrashedPlansArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryTrashedSubscriptionsArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryTrashedUsersArgs = {
  ListInputDTO: ListInputDto;
};


export type QueryUserHierarchyArgs = {
  nameFilter?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVehiclesDropdownArgs = {
  ListInputDTO: ListInputDto;
};

export type RegisterDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Float']['input']>;
  email: Scalars['String']['input'];
  emailOTP: Scalars['Float']['input'];
  mobileNo?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  organizationName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleId?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ReportFilters = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  month?: InputMaybe<Scalars['Float']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type Role = {
  __typename?: 'Role';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  permissionCount: Scalars['Float']['output'];
  permissions: Array<Permissions>;
  roleType?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type RoleArray = {
  __typename?: 'RoleArray';
  data: Array<Role>;
};

export type RoleStatusDto = {
  ids: Array<Scalars['Float']['input']>;
  status: CustomStatus;
};

export type RoleUnion = Role | RoleArray;

/** Subscription Status */
export enum SubscriptionStatus {
  Active = 'active',
  Expired = 'expired',
  Inactive = 'inactive'
}

export type SubscriptionStatusDto = {
  ids: Array<Scalars['Float']['input']>;
  status: SubscriptionStatus;
};

export type Subscriptions = {
  __typename?: 'Subscriptions';
  coupon?: Maybe<Coupon>;
  couponCode?: Maybe<Scalars['String']['output']>;
  duration: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  paymentId?: Maybe<Scalars['String']['output']>;
  plans: Array<Plan>;
  price: Scalars['Float']['output'];
  status: Scalars['String']['output'];
};

export type SubscriptionsArray = {
  __typename?: 'SubscriptionsArray';
  data: Array<Subscriptions>;
};

export type SubscriptionsUnion = Subscriptions | SubscriptionsArray;

export type Supplier = {
  __typename?: 'Supplier';
  address?: Maybe<Scalars['String']['output']>;
  contactPerson?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  gstNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type Unit = {
  __typename?: 'Unit';
  conversionFactor?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentUnit?: Maybe<Unit>;
  parentUnitId?: Maybe<Scalars['Int']['output']>;
  symbol: Scalars['String']['output'];
  type: UnitType;
  updatedAt: Scalars['DateTime']['output'];
};

/** UnitType */
export enum UnitType {
  Area = 'area',
  Density = 'density',
  Length = 'length',
  Time = 'time',
  Volume = 'volume',
  Weight = 'weight'
}

export type UpdateBreakdownDto = {
  breakdownDate: Scalars['String']['input'];
  breakdownDescription: Scalars['String']['input'];
  breakdownLocation: Scalars['String']['input'];
  breakdownType: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
  mediaUrl?: InputMaybe<Array<MediaDto>>;
  vehicleId: Scalars['Float']['input'];
};

export type UpdateCouponDto = {
  couponCode: Scalars['String']['input'];
  description: Scalars['String']['input'];
  discountValue: Scalars['Float']['input'];
  endDate: Scalars['String']['input'];
  id: Scalars['Float']['input'];
  minOrderAmount: Scalars['Float']['input'];
  startDate: Scalars['String']['input'];
  usageLimit: Scalars['Float']['input'];
};

export type UpdateFollowUpDto = {
  body?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMeetingDto = {
  attendees?: InputMaybe<Array<Scalars['Float']['input']>>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  meetingAgenda?: InputMaybe<Scalars['String']['input']>;
  meetingDate?: InputMaybe<Scalars['DateTime']['input']>;
  meetingReference?: InputMaybe<Scalars['String']['input']>;
  meetingTypeId?: InputMaybe<Scalars['Float']['input']>;
  meetingUrl?: InputMaybe<Scalars['String']['input']>;
  meetingVenueId?: InputMaybe<Scalars['Float']['input']>;
  parentMeetingId?: InputMaybe<Scalars['Float']['input']>;
  projectId?: InputMaybe<Scalars['Float']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uploadDoc?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMeetingTaskDto = {
  assigneeId?: InputMaybe<Scalars['Float']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  completePercent?: InputMaybe<Scalars['Float']['input']>;
  completedDate?: InputMaybe<Scalars['DateTime']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['Float']['input'];
  meetingId?: InputMaybe<Scalars['Float']['input']>;
  notesId?: InputMaybe<Scalars['Float']['input']>;
  openedDate?: InputMaybe<Scalars['DateTime']['input']>;
  ownerId?: InputMaybe<Scalars['Float']['input']>;
  parentTaskId?: InputMaybe<Scalars['Float']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Float']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  task?: InputMaybe<Scalars['String']['input']>;
  weightType?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMeetingTypeDto = {
  id: Scalars['Float']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMeetingVenueDto = {
  address: Scalars['String']['input'];
  contactNumber: Scalars['Float']['input'];
  contactPerson: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type UpdateModuleDto = {
  description: Scalars['String']['input'];
  id: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type UpdateNotePadDto = {
  id: Scalars['Float']['input'];
  notesField?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNotesDto = {
  decision?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  meetingId?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  uploadDoc?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOfferDto = {
  description: Scalars['String']['input'];
  discountPercent?: InputMaybe<Scalars['Float']['input']>;
  discountValue?: InputMaybe<Scalars['Float']['input']>;
  endDate: Scalars['String']['input'];
  id: Scalars['Float']['input'];
  offerType?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['String']['input'];
  title: Scalars['String']['input'];
  usageLimit: Scalars['Float']['input'];
};

export type UpdateOrganizationDto = {
  description: Scalars['String']['input'];
  id: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type UpdatePackageDto = {
  description: Scalars['String']['input'];
  discountedPrice?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['Float']['input'];
  moduleIds: Array<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  offerDescription?: InputMaybe<Scalars['String']['input']>;
  offerExpiryDate?: InputMaybe<Scalars['String']['input']>;
  offerType?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
};

export type UpdatePermissionDto = {
  action?: InputMaybe<Scalars['String']['input']>;
  appName?: InputMaybe<AppName>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  module?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePlanDto = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  discountedPrice?: InputMaybe<Scalars['Float']['input']>;
  duration: Scalars['Float']['input'];
  id: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  packageId: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
};

export type UpdateProjectDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateRoleDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  permissionIds?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type UpdateSubscriptionDto = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  discountedPrice?: InputMaybe<Scalars['Float']['input']>;
  duration: Scalars['Float']['input'];
  id: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  planIds: Array<Scalars['Int']['input']>;
  price: Scalars['Float']['input'];
};

export type UpdateUserDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  designation?: InputMaybe<Designation>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  mobileNo?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['Float']['input']>;
  roleIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  userType?: InputMaybe<UserType>;
};

export type UpdateVehicleDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  chassisNumber?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  insurance?: InputMaybe<Scalars['Boolean']['input']>;
  insuranceValidTill?: InputMaybe<Scalars['String']['input']>;
  maintenanceHistory?: InputMaybe<Scalars['String']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  numberPlate?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVehicleExpenseDto = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  breakDownId?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenseDate?: InputMaybe<Scalars['String']['input']>;
  expenseType?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  uploadDoc?: InputMaybe<Scalars['String']['input']>;
  vehicleId?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateWarehouseDto = {
  capacity?: InputMaybe<Scalars['Float']['input']>;
  contactPerson?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['Float']['input']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  designation?: Maybe<Designation>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  meetingAttendees: Array<Meeting>;
  mobileNo?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  organizationId?: Maybe<Scalars['Float']['output']>;
  parent?: Maybe<User>;
  parentId?: Maybe<Scalars['Float']['output']>;
  posts: Array<Post>;
  roles?: Maybe<Array<Role>>;
  status: Scalars['String']['output'];
  subordinates?: Maybe<Array<User>>;
  updatedAt: Scalars['DateTime']['output'];
  userType: UserType;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserArray = {
  __typename?: 'UserArray';
  data: Array<User>;
};

export type UserStatusDto = {
  ids: Array<Scalars['Float']['input']>;
  status: CustomStatus;
};

/** User Type Status */
export enum UserType {
  Admin = 'admin',
  AdminEmployee = 'adminEmployee',
  Organization = 'organization',
  OrganizationEmployee = 'organizationEmployee',
  ThirdParty = 'thirdParty',
  ThirdPartyEmployee = 'thirdPartyEmployee'
}

export type UserUnion = User | UserArray;

export type ValidateDto = {
  email: Scalars['String']['input'];
  otp: Scalars['Float']['input'];
  password: Scalars['String']['input'];
};

export type Vehicle = {
  __typename?: 'Vehicle';
  avatar?: Maybe<Scalars['String']['output']>;
  chassisNumber: Scalars['String']['output'];
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: User;
  createdById: Scalars['Int']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  insurance: Scalars['Boolean']['output'];
  insuranceValidTill?: Maybe<Scalars['DateTime']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  maintenanceHistory?: Maybe<Scalars['String']['output']>;
  make: Scalars['String']['output'];
  model: Scalars['String']['output'];
  numberPlate: Scalars['String']['output'];
  organizationBy: Organization;
  organizationId: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  year: Scalars['String']['output'];
};

export type VehicleDashboardCount = {
  __typename?: 'VehicleDashboardCount';
  breakdownCount?: Maybe<Scalars['Int']['output']>;
  expenseCount?: Maybe<Scalars['Int']['output']>;
  vehicleCount?: Maybe<Scalars['Int']['output']>;
};

export type VehicleExpense = {
  __typename?: 'VehicleExpense';
  BreakDown?: Maybe<Breakdown>;
  amount: Scalars['Float']['output'];
  breakDownId?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: User;
  createdById: Scalars['Int']['output'];
  deletedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  expenseDate?: Maybe<Scalars['DateTime']['output']>;
  expenseType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: Scalars['String']['output'];
  statuses?: Maybe<Array<VehicleExpenseStatus>>;
  updatedAt: Scalars['DateTime']['output'];
  uploadDoc?: Maybe<Scalars['String']['output']>;
  vehicle: Vehicle;
  vehicleId: Scalars['Int']['output'];
};

export type VehicleExpenseStatus = {
  __typename?: 'VehicleExpenseStatus';
  approver?: Maybe<User>;
  approverId?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['Float']['output']>;
  expense: VehicleExpense;
  expenseId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  remark: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type VehicleExpenseStatusDto = {
  approverId?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['Float']['input'];
  remark: Scalars['String']['input'];
  status: Vehicle_Expense_Status;
};

export type VehicleStatusDto = {
  id: Scalars['Float']['input'];
  status: Vehicle_Status;
};

export type VerifyPaymentInput = {
  amount: Scalars['Float']['input'];
  couponCode?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['Float']['input'];
  planIds: Array<Scalars['Int']['input']>;
  razorpayOrderId: Scalars['String']['input'];
  razorpayPaymentId: Scalars['String']['input'];
  razorpaySignature: Scalars['String']['input'];
};

export type Warehouse = {
  __typename?: 'Warehouse';
  capacity: Scalars['Float']['output'];
  contactPerson?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['Float']['output']>;
  status: Scalars['String']['output'];
};

/** Warehouse Status */
export enum WarehouseStatus {
  Active = 'active',
  Full = 'full',
  Inactive = 'inactive',
  OutOfStock = 'outOfStock'
}

export type WarehouseStatusDto = {
  id: Scalars['Float']['input'];
  status: WarehouseStatus;
};

export enum AppName {
  MasterApp = 'MasterApp',
  MaterialManagement = 'MaterialManagement',
  TaskManagement = 'TaskManagement',
  VehicleManagement = 'VehicleManagement'
}

export enum Breakdown_Status {
  Approved = 'approved',
  Assigned = 'assigned',
  Cancelled = 'cancelled',
  Closed = 'closed',
  Completed = 'completed',
  InProgress = 'in_progress',
  InService = 'in_service',
  Pending = 'pending',
  Rejected = 'rejected',
  ServiceScheduled = 'service_scheduled',
  UnderReview = 'under_review'
}

export enum Vehicle_Expense_Status {
  Approved = 'approved',
  Assigned = 'assigned',
  Cancelled = 'cancelled',
  Completed = 'completed',
  InProgress = 'in_progress',
  Pending = 'pending',
  Rejected = 'rejected',
  UnderReview = 'under_review'
}

export enum Vehicle_Status {
  Active = 'active',
  Breakdown = 'breakdown',
  Inactive = 'inactive',
  Maintenance = 'maintenance'
}

export type RequestOtpMutationVariables = Exact<{
  otpRequestData: OtpRequestDto;
}>;


export type RequestOtpMutation = { __typename?: 'Mutation', requestOtp: { __typename?: 'OtpRes', otpGeneratedSuccessfully: boolean, otp?: number | null, message?: string | null } };

export type LoginMutationVariables = Exact<{
  loginData: ValidateDto;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginRes', accessToken: string, user: { __typename?: 'User', id: string, name: string, username?: string | null, mobileNo?: number | null, email: string, status: string, avatar?: string | null, parentId?: number | null, createdAt: any, updatedAt: any, deletedAt?: any | null } } };

export type DeleteMetingMutationVariables = Exact<{
  ids: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type DeleteMetingMutation = { __typename?: 'Mutation', deleteMeting: boolean };

export type CreateMeetingTypeMutationVariables = Exact<{
  data: CreateMeetingTypeDto;
}>;


export type CreateMeetingTypeMutation = { __typename?: 'Mutation', createMeetingType: { __typename?: 'MeetingType', id: string, name: string } };

export type UpdateMeetingTypeMutationVariables = Exact<{
  updateMeetingTypeInput: UpdateMeetingTypeDto;
}>;


export type UpdateMeetingTypeMutation = { __typename?: 'Mutation', updateMeetingType: { __typename?: 'MeetingType', id: string, name: string } };

export type DeleteMetingVenueMutationVariables = Exact<{
  ids: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type DeleteMetingVenueMutation = { __typename?: 'Mutation', deleteMetingVenue: boolean };

export type CreateMeetingVenueMutationVariables = Exact<{
  data: CreateMeetingVenueDto;
}>;


export type CreateMeetingVenueMutation = { __typename?: 'Mutation', createMeetingVenue: { __typename?: 'MeetingVenue', id: string, name: string, address?: string | null, contactPerson?: string | null, contactNumber?: number | null, description?: string | null, createdAt: any } };

export type UpdateMeetingVenueMutationVariables = Exact<{
  updateMeetingVenueInput: UpdateMeetingVenueDto;
}>;


export type UpdateMeetingVenueMutation = { __typename?: 'Mutation', updateMeetingVenue: { __typename?: 'MeetingVenue', id: string, name: string, address?: string | null, contactPerson?: string | null, contactNumber?: number | null, description?: string | null } };

export type CreateMeetingMutationVariables = Exact<{
  data: CreateMeetingDto;
}>;


export type CreateMeetingMutation = { __typename?: 'Mutation', createMeeting: { __typename?: 'Meeting', id: string, meetingReference: string, projectId?: number | null, createdByUserId: string, meetingVenueId?: number | null, meetingTypeId: number, parentMeetingId?: number | null, title: string, startTime: string, endTime: string, status: string, meetingDate: any, meetingAgenda?: string | null, meetingUrl?: string | null, attendees?: Array<number> | null, uploadDoc?: string | null } };

export type UpdateMeetingMutationVariables = Exact<{
  updateMeetingInput: UpdateMeetingDto;
}>;


export type UpdateMeetingMutation = { __typename?: 'Mutation', updateMeeting: { __typename?: 'Meeting', id: string, meetingReference: string, projectId?: number | null, createdByUserId: string, meetingVenueId?: number | null, meetingTypeId: number, parentMeetingId?: number | null, title: string, startTime: string, endTime: string, status: string, meetingDate: any, meetingAgenda?: string | null, meetingUrl?: string | null, attendees?: Array<number> | null, uploadDoc?: string | null } };

export type DeleteNotesMutationVariables = Exact<{
  ids: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type DeleteNotesMutation = { __typename?: 'Mutation', deleteNotes: boolean };

export type CreateNotesMutationVariables = Exact<{
  notesData: Array<CreateNotesDto> | CreateNotesDto;
}>;


export type CreateNotesMutation = { __typename?: 'Mutation', createNotes: Array<{ __typename?: 'Notes', id: string, meetingId?: number | null, decision?: string | null, notes?: string | null, uploadDoc?: string | null }> };

export type DeleteMetingTaskMutationVariables = Exact<{
  ids: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type DeleteMetingTaskMutation = { __typename?: 'Mutation', deleteMetingTask: boolean };

export type CreateMeetingTaskMutationVariables = Exact<{
  input: CreateMeetingTaskDto;
}>;


export type CreateMeetingTaskMutation = { __typename?: 'Mutation', createMeetingTask: { __typename?: 'MeetingTask', id: string, ownerId?: number | null, assigneeId?: number | null, meetingId?: number | null, notesId?: number | null, projectId?: number | null, parentTaskId?: number | null, task?: string | null, comment?: string | null, openedDate: any, dueDate: any, completedDate?: any | null, priority: string, status: string, completePercent?: number | null, totalTaskComplete?: number | null, weightType?: string | null } };

export type CreateFollowUpMutationVariables = Exact<{
  data: CreateFollowUpDto;
}>;


export type CreateFollowUpMutation = { __typename?: 'Mutation', createFollowUp: { __typename?: 'FollowUp', body?: string | null, id: number, subject?: string | null } };

export type CreateNotePadMutationVariables = Exact<{
  notesData: CreateNotePadDto;
}>;


export type CreateNotePadMutation = { __typename?: 'Mutation', createNotePad: { __typename?: 'NotePad', id: string, notesField?: string | null, status: string } };

export type DeleteNotePadMutationVariables = Exact<{
  ids: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type DeleteNotePadMutation = { __typename?: 'Mutation', deleteNotePad: boolean };

export type UpdateNotePadMutationVariables = Exact<{
  updateNotesInput: UpdateNotePadDto;
}>;


export type UpdateNotePadMutation = { __typename?: 'Mutation', updateNotePad: { __typename?: 'NotePad', id: string, notesField?: string | null, status: string } };

export type PaginatedMeetingQueryVariables = Exact<{
  listInputDto: ListInputDto;
}>;


export type PaginatedMeetingQuery = { __typename?: 'Query', paginatedMeeting: { __typename?: 'PaginatedMeeting', data: Array<{ __typename?: 'Meeting', id: string, meetingReference: string, projectId?: number | null, createdByUserId: string, meetingVenueId?: number | null, meetingTypeId: number, parentMeetingId?: number | null, title: string, startTime: string, endTime: string, status: string, meetingDate: any, meetingAgenda?: string | null, meetingUrl?: string | null, attendees?: Array<number> | null, uploadDoc?: string | null, createdAt: any, updatedAt: any, deletedAt?: any | null }> } };

export type PaginatedProjectsQueryVariables = Exact<{
  listInputDto: ListInputDto;
}>;


export type PaginatedProjectsQuery = { __typename?: 'Query', paginatedProjects: { __typename?: 'PaginatedProjects', data: Array<{ __typename?: 'Project', id: string, name: string, organizationId: number }> } };

export type GetAllMeetingTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMeetingTypesQuery = { __typename?: 'Query', getAllMeetingTypes: Array<{ __typename?: 'MeetingType', id: string, name: string }> };

export type PaginatedMeetingVenueQueryVariables = Exact<{
  listInputDto: ListInputDto;
}>;


export type PaginatedMeetingVenueQuery = { __typename?: 'Query', paginatedMeetingVenue: { __typename?: 'PaginatedMeetingVenue', data: Array<{ __typename?: 'MeetingVenue', id: string, name: string, address?: string | null, contactPerson?: string | null, contactNumber?: number | null, description?: string | null }> } };

export type PaginatedUsersQueryVariables = Exact<{
  listInputDto: ListInputDto;
}>;


export type PaginatedUsersQuery = { __typename?: 'Query', paginatedUsers: { __typename?: 'PaginatedUsers', data: Array<{ __typename?: 'User', name: string, id: string }> } };

export type PaginatedMeetingTypeQueryVariables = Exact<{
  listInputDto: ListInputDto;
}>;


export type PaginatedMeetingTypeQuery = { __typename?: 'Query', paginatedMeetingType: { __typename?: 'PaginatedMeetingType', data: Array<{ __typename?: 'MeetingType', name: string, id: string }> } };

export type DeleteMetingTypeMutationVariables = Exact<{
  ids: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type DeleteMetingTypeMutation = { __typename?: 'Mutation', deleteMetingType: boolean };

export type PaginatedNotesQueryVariables = Exact<{
  listInputDto: ListInputDto;
}>;


export type PaginatedNotesQuery = { __typename?: 'Query', paginatedNotes: { __typename?: 'PaginatedNotes', data: Array<{ __typename?: 'Notes', decision?: string | null, id: string, meetingId?: number | null, notes?: string | null }> } };

export type GetUpcomingMeetingTaskQueryVariables = Exact<{
  listInputDto: ListInputDto;
}>;


export type GetUpcomingMeetingTaskQuery = { __typename?: 'Query', getUpcomingMeetingTask: { __typename?: 'PaginatedMeetingTask', data: Array<{ __typename?: 'MeetingTask', id: string, ownerId?: number | null, assigneeId?: number | null, meetingId?: number | null, notesId?: number | null, projectId?: number | null, parentTaskId?: number | null, task?: string | null, comment?: string | null, openedDate: any, dueDate: any, completedDate?: any | null, priority: string, status: string, completePercent?: number | null, weightType?: string | null }> } };

export type PaginatedMeetingTaskQueryVariables = Exact<{
  listInputDto: ListInputDto;
}>;


export type PaginatedMeetingTaskQuery = { __typename?: 'Query', paginatedMeetingTask: { __typename?: 'PaginatedMeetingTask', data: Array<{ __typename?: 'MeetingTask', id: string, ownerId?: number | null, assigneeId?: number | null, meetingId?: number | null, notesId?: number | null, projectId?: number | null, parentTaskId?: number | null, task?: string | null, comment?: string | null, openedDate: any, dueDate: any, completedDate?: any | null, priority: string, status: string, completePercent?: number | null, totalTaskComplete?: number | null, weightType?: string | null }> } };

export type PaginatedNotePadQueryVariables = Exact<{
  listInputDto: ListInputDto;
}>;


export type PaginatedNotePadQuery = { __typename?: 'Query', paginatedNotePad: { __typename?: 'PaginatedNotePad', data: Array<{ __typename?: 'NotePad', id: string, status: string, notesField?: string | null }> } };

export type GetUpcomingMeetingsQueryVariables = Exact<{
  listInputDto: ListInputDto;
}>;


export type GetUpcomingMeetingsQuery = { __typename?: 'Query', getUpcomingMeetings: { __typename?: 'PaginatedMeeting', data: Array<{ __typename?: 'Meeting', id: string, meetingReference: string, projectId?: number | null, createdByUserId: string, meetingVenueId?: number | null, meetingTypeId: number, projectName?: string | null, parentMeetingId?: number | null, title: string, startTime: string, endTime: string, status: string, meetingDate: any, meetingAgenda?: string | null, meetingUrl?: string | null, attendees?: Array<number> | null }> } };


export const RequestOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otpRequestData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OtpRequestDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"otpRequestData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otpRequestData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"otpGeneratedSuccessfully"}},{"kind":"Field","name":{"kind":"Name","value":"otp"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<RequestOtpMutation, RequestOtpMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ValidateDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNo"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const DeleteMetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}]}}]} as unknown as DocumentNode<DeleteMetingMutation, DeleteMetingMutationVariables>;
export const CreateMeetingTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMeetingType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMeetingTypeDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMeetingType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateMeetingTypeMutation, CreateMeetingTypeMutationVariables>;
export const UpdateMeetingTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMeetingType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateMeetingTypeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMeetingTypeDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMeetingType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateMeetingTypeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateMeetingTypeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateMeetingTypeMutation, UpdateMeetingTypeMutationVariables>;
export const DeleteMetingVenueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMetingVenue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMetingVenue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}]}}]} as unknown as DocumentNode<DeleteMetingVenueMutation, DeleteMetingVenueMutationVariables>;
export const CreateMeetingVenueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMeetingVenue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMeetingVenueDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMeetingVenue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"contactPerson"}},{"kind":"Field","name":{"kind":"Name","value":"contactNumber"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateMeetingVenueMutation, CreateMeetingVenueMutationVariables>;
export const UpdateMeetingVenueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMeetingVenue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateMeetingVenueInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMeetingVenueDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMeetingVenue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateMeetingVenueInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateMeetingVenueInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"contactPerson"}},{"kind":"Field","name":{"kind":"Name","value":"contactNumber"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<UpdateMeetingVenueMutation, UpdateMeetingVenueMutationVariables>;
export const CreateMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMeetingDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meetingReference"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"createdByUserId"}},{"kind":"Field","name":{"kind":"Name","value":"meetingVenueId"}},{"kind":"Field","name":{"kind":"Name","value":"meetingTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"parentMeetingId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"meetingDate"}},{"kind":"Field","name":{"kind":"Name","value":"meetingAgenda"}},{"kind":"Field","name":{"kind":"Name","value":"meetingUrl"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"}},{"kind":"Field","name":{"kind":"Name","value":"uploadDoc"}}]}}]}}]} as unknown as DocumentNode<CreateMeetingMutation, CreateMeetingMutationVariables>;
export const UpdateMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateMeetingInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMeetingDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateMeetingInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateMeetingInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meetingReference"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"createdByUserId"}},{"kind":"Field","name":{"kind":"Name","value":"meetingVenueId"}},{"kind":"Field","name":{"kind":"Name","value":"meetingTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"parentMeetingId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"meetingDate"}},{"kind":"Field","name":{"kind":"Name","value":"meetingAgenda"}},{"kind":"Field","name":{"kind":"Name","value":"meetingUrl"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"}},{"kind":"Field","name":{"kind":"Name","value":"uploadDoc"}}]}}]}}]} as unknown as DocumentNode<UpdateMeetingMutation, UpdateMeetingMutationVariables>;
export const DeleteNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}]}}]} as unknown as DocumentNode<DeleteNotesMutation, DeleteNotesMutationVariables>;
export const CreateNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notesData"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateNotesDto"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"notesData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meetingId"}},{"kind":"Field","name":{"kind":"Name","value":"decision"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"uploadDoc"}}]}}]}}]} as unknown as DocumentNode<CreateNotesMutation, CreateNotesMutationVariables>;
export const DeleteMetingTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMetingTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMetingTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}]}}]} as unknown as DocumentNode<DeleteMetingTaskMutation, DeleteMetingTaskMutationVariables>;
export const CreateMeetingTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMeetingTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMeetingTaskDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMeetingTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"assigneeId"}},{"kind":"Field","name":{"kind":"Name","value":"meetingId"}},{"kind":"Field","name":{"kind":"Name","value":"notesId"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"parentTaskId"}},{"kind":"Field","name":{"kind":"Name","value":"task"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"openedDate"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"completedDate"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"completePercent"}},{"kind":"Field","name":{"kind":"Name","value":"totalTaskComplete"}},{"kind":"Field","name":{"kind":"Name","value":"weightType"}}]}}]}}]} as unknown as DocumentNode<CreateMeetingTaskMutation, CreateMeetingTaskMutationVariables>;
export const CreateFollowUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFollowUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFollowUpDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFollowUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}}]}}]}}]} as unknown as DocumentNode<CreateFollowUpMutation, CreateFollowUpMutationVariables>;
export const CreateNotePadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNotePad"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notesData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateNotePadDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNotePad"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"notesData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notesField"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CreateNotePadMutation, CreateNotePadMutationVariables>;
export const DeleteNotePadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNotePad"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNotePad"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}]}}]} as unknown as DocumentNode<DeleteNotePadMutation, DeleteNotePadMutationVariables>;
export const UpdateNotePadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNotePad"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateNotesInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateNotePadDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNotePad"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateNotesInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateNotesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notesField"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdateNotePadMutation, UpdateNotePadMutationVariables>;
export const PaginatedMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginatedMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListInputDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginatedMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ListInputDTO"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meetingReference"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"createdByUserId"}},{"kind":"Field","name":{"kind":"Name","value":"meetingVenueId"}},{"kind":"Field","name":{"kind":"Name","value":"meetingTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"parentMeetingId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"meetingDate"}},{"kind":"Field","name":{"kind":"Name","value":"meetingAgenda"}},{"kind":"Field","name":{"kind":"Name","value":"meetingUrl"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"}},{"kind":"Field","name":{"kind":"Name","value":"uploadDoc"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]}}]} as unknown as DocumentNode<PaginatedMeetingQuery, PaginatedMeetingQueryVariables>;
export const PaginatedProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginatedProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListInputDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginatedProjects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ListInputDTO"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"organizationId"}}]}}]}}]}}]} as unknown as DocumentNode<PaginatedProjectsQuery, PaginatedProjectsQueryVariables>;
export const GetAllMeetingTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMeetingTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllMeetingTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllMeetingTypesQuery, GetAllMeetingTypesQueryVariables>;
export const PaginatedMeetingVenueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginatedMeetingVenue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListInputDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginatedMeetingVenue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ListInputDTO"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"contactPerson"}},{"kind":"Field","name":{"kind":"Name","value":"contactNumber"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<PaginatedMeetingVenueQuery, PaginatedMeetingVenueQueryVariables>;
export const PaginatedUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginatedUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListInputDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginatedUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ListInputDTO"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<PaginatedUsersQuery, PaginatedUsersQueryVariables>;
export const PaginatedMeetingTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginatedMeetingType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListInputDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginatedMeetingType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ListInputDTO"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<PaginatedMeetingTypeQuery, PaginatedMeetingTypeQueryVariables>;
export const DeleteMetingTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMetingType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMetingType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}]}}]} as unknown as DocumentNode<DeleteMetingTypeMutation, DeleteMetingTypeMutationVariables>;
export const PaginatedNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginatedNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListInputDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginatedNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ListInputDTO"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"decision"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meetingId"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}}]}}]}}]}}]} as unknown as DocumentNode<PaginatedNotesQuery, PaginatedNotesQueryVariables>;
export const GetUpcomingMeetingTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUpcomingMeetingTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListInputDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUpcomingMeetingTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ListInputDTO"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"assigneeId"}},{"kind":"Field","name":{"kind":"Name","value":"meetingId"}},{"kind":"Field","name":{"kind":"Name","value":"notesId"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"parentTaskId"}},{"kind":"Field","name":{"kind":"Name","value":"task"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"openedDate"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"completedDate"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"completePercent"}},{"kind":"Field","name":{"kind":"Name","value":"weightType"}}]}}]}}]}}]} as unknown as DocumentNode<GetUpcomingMeetingTaskQuery, GetUpcomingMeetingTaskQueryVariables>;
export const PaginatedMeetingTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginatedMeetingTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListInputDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginatedMeetingTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ListInputDTO"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"assigneeId"}},{"kind":"Field","name":{"kind":"Name","value":"meetingId"}},{"kind":"Field","name":{"kind":"Name","value":"notesId"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"parentTaskId"}},{"kind":"Field","name":{"kind":"Name","value":"task"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"openedDate"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"completedDate"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"completePercent"}},{"kind":"Field","name":{"kind":"Name","value":"totalTaskComplete"}},{"kind":"Field","name":{"kind":"Name","value":"weightType"}}]}}]}}]}}]} as unknown as DocumentNode<PaginatedMeetingTaskQuery, PaginatedMeetingTaskQueryVariables>;
export const PaginatedNotePadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginatedNotePad"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListInputDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginatedNotePad"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ListInputDTO"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"notesField"}}]}}]}}]}}]} as unknown as DocumentNode<PaginatedNotePadQuery, PaginatedNotePadQueryVariables>;
export const GetUpcomingMeetingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUpcomingMeetings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListInputDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUpcomingMeetings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ListInputDTO"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listInputDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meetingReference"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"createdByUserId"}},{"kind":"Field","name":{"kind":"Name","value":"meetingVenueId"}},{"kind":"Field","name":{"kind":"Name","value":"meetingTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"projectName"}},{"kind":"Field","name":{"kind":"Name","value":"parentMeetingId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"meetingDate"}},{"kind":"Field","name":{"kind":"Name","value":"meetingAgenda"}},{"kind":"Field","name":{"kind":"Name","value":"meetingUrl"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"}}]}}]}}]}}]} as unknown as DocumentNode<GetUpcomingMeetingsQuery, GetUpcomingMeetingsQueryVariables>;