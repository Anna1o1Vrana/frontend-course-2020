import { UserModel } from "./user.model";
import { SupportModel } from "./support.model";

export class UsersResponse {
  constructor(
    public page: number,
    public per_page: number,
    public total: number,
    public total_pages: number,
    public data: UserModel[],
    public support: SupportModel[]
  ) {  }
  }
