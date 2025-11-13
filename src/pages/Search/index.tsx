import { useRouter } from "next/router"; // useRouter두개 있는거 주의
export default function Page() {
  const router = useRouter();
  const { q } = router.query;
  console.log(router);
  return <h1>search!{q}</h1>;
}
