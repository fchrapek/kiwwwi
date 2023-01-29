import { handleToggler } from '@scripts/components/navigation';
import { handleSelect, handleMultiselect, closeCustomSelects } from '@scripts/components/forms';

class Common {
  init() {
    handleToggler();
    handleSelect();
    handleMultiselect();
    closeCustomSelects();
  }
}

export default Common;
