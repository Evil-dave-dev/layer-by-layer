import Typography from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { MdHomeFilled } from "react-icons/md";
import Container from "../container/container";
import Link from "next/link";

const Breadcrumbs = () => {
  const router = usePathname();
  const segments = router.split("/");
  console.log("segments : ", segments);
  const lastSegment = segments[segments.length - 1];
  segments[0] = "accueil";

  const view = segments.map((path, index) => (
    <div key={uuidv4()}>
      <Link
        href={index > 0 ? `/${segments.slice(1, index + 1).join("/")}` : `/`}
      >
        <Typography
          variant="caption3"
          component="span"
          className={clsx(
            path !== lastSegment ? "text-gray-500" : "text-gray",
            "capitalize hover:text-gray animate"
          )}
        >
          {path !== "accueil" ? (
            path.replace(/-/g, " ")
          ) : (
            <MdHomeFilled className="inline -mt-1" />
          )}
        </Typography>
        {path !== lastSegment && (
          <Typography
            variant="caption2"
            component="span"
            className="ml-2 text-gray-600"
          >
            /
          </Typography>
        )}
      </Link>
    </div>
  ));

  return <Container className="flex items-center gap-2 py-6">{view}</Container>;
};

export default Breadcrumbs;
