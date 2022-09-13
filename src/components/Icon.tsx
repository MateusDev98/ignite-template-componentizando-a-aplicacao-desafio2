import { ActionIcon } from "./Icons/ActionIcon";
import { ComedyIcon } from "./Icons/ComedyIcon";
import { DocumentaryIcon } from "./Icons/DocumentaryIcon";
import { DramaIcon } from "./Icons/DramaIcon";
import { HorrorIcon } from "./Icons/HorrorIcon";
import { FamilyIcon } from "./Icons/FamilyIcon";

export function Icon(props: IconProps) {
  switch (props.name) {
    case "action":
      return <ActionIcon color={props.color} />;
    case "comedy":
      return <ComedyIcon color={props.color} />;
    case "documentary":
      return <DocumentaryIcon color={props.color} />;
    case "drama":
      return <DramaIcon color={props.color} />;
    case "horror":
      return <HorrorIcon color={props.color} />;
    case "family":
      return <FamilyIcon color={props.color} />;
    default:
      return <></>;
  }
}
