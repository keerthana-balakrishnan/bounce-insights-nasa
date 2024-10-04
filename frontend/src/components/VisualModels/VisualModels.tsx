import { MODEL_URL } from "./VisualModels.const";
import { styles } from "./VisualModels.styles";
import { VisualModelsProps } from "./VisualModels.types";

const VisualModels = (props: VisualModelsProps) => {
  return (
    <iframe
      src={MODEL_URL[props.model]}
      className={styles.root}
      title="Eye on the Solar System"
    />
  );
};

export { VisualModels };
