import { Create } from "./Create";
import { Delete } from "./Delete";
import { Find } from "./Find";
import { Update } from "./Update";


export class TagServices {
  public find(): Find {
    return new Find()
  }

  public create(): Create {
    return new Create()
  }

  public update(): Update {
    return new Update()
  }

  public delete(): Delete {
    return new Delete()
  }
}