/* Components */
import { Counter } from "./components/Counter/Counter";
import { LandingPage } from "./landing/page";

export default function IndexPage() {
  const counterPrefetch = <Counter></Counter>;
  return <LandingPage />;
}

export const metadata = {
  title: "Redux Toolkit",
};
