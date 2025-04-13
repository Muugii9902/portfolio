import Link from "next/link";

const Navlink = ({ href, title }) => {
  return (
    <Link href={href} className="">
      {title}
    </Link>
  );
};

export default Navlink;
