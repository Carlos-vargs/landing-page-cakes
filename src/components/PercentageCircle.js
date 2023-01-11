import { Center, Stack } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";

export default function PercentageCircle({ title, percentage }) {
  return (
    <Stack alignItems="center">
      <CircularProgress
        capIsRound="true"
        value={percentage}
        size="160px"
        color="#F5EEEE"
        thickness={"4px"}
        trackColor="#D3AD98"
      >
        <CircularProgressLabel fontSize="body">
          {percentage}%
        </CircularProgressLabel>
      </CircularProgress>
      <Center paddingBlockStart="38px" fontSize="body" fontWeight="bold">
        {title}
      </Center>
    </Stack>
  );
}
