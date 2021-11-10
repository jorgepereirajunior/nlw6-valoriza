import { Create } from "./Create";
import { Find } from "./Find";

export class UserService {
  public find(): Find {
    return new Find()
  }

  public create(): Create {
    return new Create()
  }
}