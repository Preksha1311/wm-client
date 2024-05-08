// types/recycleTypes.ts
export interface RecycleRequest {
    _id?: string;  // Optional for creation
    name: string;
    address: string;
    contactNumber: string;
    wasteType: string;
    uploadImg?: string;  // This will hold the image URL after upload
  }
  