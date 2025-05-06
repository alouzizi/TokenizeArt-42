import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


export default buildModule("Goat42", (m) => {

  const deployer = m.getAccount(0);

  const goat = m.contract("Goat42", [deployer],{
    from: deployer,

  });
  return { goat };
});

