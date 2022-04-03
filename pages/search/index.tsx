import { Layout } from "components/layout";
import { SearchPageComp } from "components/search-comp";

export default function SearchPage() {
  return (
    <Layout searchBar={true}>
      <SearchPageComp />
    </Layout>
  );
}
