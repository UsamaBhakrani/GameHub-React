import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }) => {
  return (
    <Badge fontSize="14px" paddingX="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
