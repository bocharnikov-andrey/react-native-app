import { FC, useMemo, useState } from "react";
import { Pressable } from "react-native";
import { richTextBaseStyle, styles } from "./styles";
import PrimaryText from "components/PrimaryText";
import RichText from "components/RichText";
import { COLORS } from "constants/colors";

const SHORT_DESCRIPTION_LENGTH = 160;

type Props = {
  text: string;
};

const Description: FC<Props> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formattedExplainerNotes = text.replace(/<[^>]*>/g, "");
  const readMoreButtonShown = !isExpanded && formattedExplainerNotes.length > SHORT_DESCRIPTION_LENGTH;

  const visibleDescription = useMemo(() => {
    if (!isExpanded) {
      const description = text.substring(0, SHORT_DESCRIPTION_LENGTH);
      if (formattedExplainerNotes.length > SHORT_DESCRIPTION_LENGTH) {
        return `${description}...`;
      }
      return description;
    }

    return text
      .split(" ")
      .map((word) => {
        if (word === "neme" || word === "nemes" || word === "Nemes") {
          return `<i>${word}</i>`;
        }
        return word;
      })
      .join(" ");
  }, [text, isExpanded]);

  const handleReadMoreClick = () => {
    setIsExpanded(true);
  };

  return (
    <>
      <RichText
        baseStyle={richTextBaseStyle}
        content={visibleDescription}
      />
      {readMoreButtonShown && (
        <Pressable onPress={handleReadMoreClick}>
          <PrimaryText
            style={styles.readMoreButton}
            textColor={COLORS.black}
            fontSize={16}
            fontWeight={400}
          >
            Read more
          </PrimaryText>
        </Pressable>
      )}
    </>
  );
};

export default Description;
