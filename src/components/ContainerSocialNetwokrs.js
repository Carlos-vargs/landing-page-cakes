import { Link } from "@chakra-ui/react";
import socialNetworks from "../SocialNetworkData";

export default function ContainerSocialNetworks() {
  return (
    <>
      {socialNetworks.map((socialNetwork, key) => (
        <Link
          key={key}
          href={socialNetwork?.url}
          paddingInline={socialNetwork?.pl}
          textColor="white"
          paddingBlockStart={socialNetwork?.pt}
          isExternal
          display="flex"
          width="20px"
          height="20px"
          title={socialNetwork?.name}
        >
          {socialNetwork?.icon}
        </Link>
      ))}
    </>
  );
}
