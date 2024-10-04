import { FontIcon, Link, Stack, Text } from "@fluentui/react";
import { styles } from "./Footer.styles";
import { footerStrings } from "../../strings/strings";

const Footer: React.FC = () => {
  return (
    <Stack
      horizontalAlign="center"
      className={styles.root}
      tokens={{ childrenGap: 10 }}
    >
      <Text variant="medium" className={styles.footerText}>
        {footerStrings.footer_text}
      </Text>
      <Link
        href="https://www.linkedin.com/in/keerthana-balakrishnan-0b1a10110/"
        target="_blank"
      >
        <FontIcon
          iconName="LinkedInLogo"
          title={footerStrings.linkedin}
          className={styles.icon}
        />
      </Link>
    </Stack>
  );
};

export { Footer };
