import { Create } from "./Create";
import { Delete } from "./Delete";
import { Find } from "./Find";

export class UserService {
  public find(): Find {
    return new Find()
  }

  public create(): Create {
    return new Create()
  }

  public delete(): Delete {
    return new Delete()
  }
}