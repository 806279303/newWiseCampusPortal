import {ReactComponent as SidePrimary} from "./side-primary.svg";
import {ReactComponent as SideSuccess} from "./side-success.svg";
import {ReactComponent as SideWarning} from "./side-warning.svg";
import {ReactComponent as SideDisabled} from "./side-disabled.svg";

import {ReactComponent as CornerPrimary} from "./corner-primary.svg";
import {ReactComponent as CornerSuccess} from "./corner-success.svg";
import {ReactComponent as CornerWarning} from "./corner-warning.svg";
import {ReactComponent as CornerDisabled} from "./corner-disabled.svg";


import {ReactComponent as SealInProgress} from "./seal-in-progress.svg";
import {ReactComponent as SealNotStart} from "./seal-not-start.svg";
import {ReactComponent as SealUndone} from "./seal-undone.svg";
import {ReactComponent as SealWithDrawn} from "./seal-withdrawn.svg";
import {ReactComponent as SealDelay} from "./seal-delay.svg";

export const SvgIcon = {
  "side": {
    "primary": SidePrimary,
    "success": SideSuccess,
    "warning": SideWarning,
    "disabled": SideDisabled
  },
  "corner": {
    "primary": CornerPrimary,
    "success": CornerSuccess,
    "warning": CornerWarning,
    "disabled": CornerDisabled
  },
  "seal": {
    "inProgress": SealInProgress,
    "notStart": SealNotStart,
    "undone": SealUndone,
    "withdrawn": SealWithDrawn,
    "delay": SealDelay
  }
};