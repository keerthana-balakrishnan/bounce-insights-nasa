import { Stack } from "@fluentui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MENU_ITEMS } from "../../components/Header";
import { SplitView } from "../../components/SplitView";
import { Spotlight } from "../../components/Spotlight";
import { VisualModels } from "../../components/VisualModels";
import { styles } from "./HomePage.styles";

const HomePageTitles: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Stack
      id={title}
      horizontal
      horizontalAlign="start"
      tokens={{ childrenGap: 20 }}
    >
      <h1 className={styles.title}>{title}</h1>
    </Stack>
  );
};

const HomePage: React.FC = () => {
  return (
    <Stack
      verticalAlign="center"
      className={styles.root}
      tokens={{ childrenGap: 40 }}
      id={MENU_ITEMS[0]}
    >
      <Header />
      <Spotlight />
      <HomePageTitles title={MENU_ITEMS[1]} />
      <SplitView />
      <HomePageTitles title={MENU_ITEMS[2]} />
      <VisualModels model="solarSystem" />
      <HomePageTitles title={MENU_ITEMS[3]} />
      <VisualModels model="marsRover" />
      <Footer />
    </Stack>
  );
};

export { HomePage };
