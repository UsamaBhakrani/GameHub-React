import { Card, Skeleton, SkeletonText, CardBody } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <CardBody>
        <SkeletonText mt="4" noOfLines={20} spacing="4" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
};

export default GenreListSkeleton;
