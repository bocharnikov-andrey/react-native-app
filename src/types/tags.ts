export type TagType = {
  id: string;
  name: string;
  notes: string;
  type: TagTypeEnum;
  updatedAt: Date;
  explainerTitle?: string;
  explainerNotes?: string;
  status: StatusTag;
};

export enum TagTypeEnum {
  TAG = "tag",
  CATEGORY = "category",
  AUTOMATED = "automated",
}

export enum StatusTag {
  PUBLISHED = "published",
  HIDDEN = "hidden",
}
