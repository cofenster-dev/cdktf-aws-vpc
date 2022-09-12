import { Construct } from "constructs";
import { Vpc } from "../.gen/modules/vpc";

export class VPCProps {
  readonly name: string;
  readonly cidr: string;
  readonly privateSubnets: string[];
  readonly publicSubnets: string[];
  readonly azs: string[];
  readonly region?: string;
  readonly enableNATGateway?: boolean;
  readonly enableVPNGateway?: boolean;
  readonly enableDNSHostnames?: boolean;
  readonly enableDNSSupport?: boolean;
  // TODO: enableFlowLog
}

export class VPC extends Construct {
  constructor(scope: Construct, id: string, props: VPCProps) {
    super(scope, id);

    new Vpc(this, props.name, {
      name: props.name,
      cidr: props.cidr,
      azs: props.azs,
      privateSubnets: props.privateSubnets,
      publicSubnets: props.publicSubnets,
      enableNatGateway: props.enableNATGateway ?? false,
    });
  }
}
