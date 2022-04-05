import { Title, Subtitle, Text, LargeTextBold, BoldText } from "ui/typography";
import { SecondaryButton } from "ui/buttons";
import { Card } from "ui/card";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useSearchProducts } from "hooks/search";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { pagination } from "lib/utils";

export function SearchPageComp() {
  const router = useRouter();
  const { setSearch, products, error, isLoading, setPageIndex } =
    useSearchProducts();
  const [paginationData, setPaginationData] = useState<{
    limit: number;
    total: number;
    offset: number;
  }>({ limit: 0, total: 0, offset: 0 });

  useEffect(() => {
    if (router.query.q) {
      setSearch(router.query.q as string);
    }
  }, [router.query.q]);

  useEffect(() => {
    const data = pagination({
      rawLimit: products?.pagination?.limit,
      total: products?.pagination?.total,
      offset: products?.pagination?.offset,
    });
    setPaginationData(data);
  }, [products]);

  const scrollToTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          "@media (min-width: 769px)": {
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        {!isLoading && products?.results?.length && (
          <Box
            sx={{
              "@media (min-width: 769px)": {
                flexDirection: "row",
                display: "flex",
                justifyContent: "flex-start",
                textAlign: "left",
                marginRight: "calc(80vw - 19px)",
                marginTop: "20px",
              },
              display: "none",
            }}
          >
            <div>
              <Text color="black">{`${
                paginationData.offset + paginationData.limit <
                paginationData.total
                  ? paginationData.offset + paginationData.limit
                  : paginationData.total
              } resultados de ${paginationData.total}`}</Text>
            </div>
          </Box>
        )}
        {isLoading && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              color="primary"
              sx={{ backgroundColor: "var(--orange)" }}
            />
          </Box>
        )}
        <Box
          sx={{
            "@media (min-width: 769px)": {
              flexDirection: "row",
            },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            "&& > *": {
              margin: "20px",
            },
            "&& > *:first-child": {
              textAlign: "left",
              alignSelf: "flex-start",
              margin: "20px 0px 0px 0px",
            },
          }}
        >
          {!isLoading && products?.results?.length && (
            <>
              <Box
                sx={{
                  "@media (min-width: 769px)": {
                    display: "none",
                  },
                }}
              >
                <div>
                  <Text color="black">{`${
                    paginationData.offset + paginationData.limit <
                    paginationData.total
                      ? paginationData.offset + paginationData.limit
                      : paginationData.total
                  } resultados de ${paginationData.total}`}</Text>
                </div>
              </Box>
              {products?.results?.map((item: any, index: number) => {
                return (
                  <Card
                    key={index}
                    product={item}
                    sx={{
                      width: "100%",
                      maxWidth: "280px",
                      height: "350px",
                    }}
                  ></Card>
                );
              })}
              <Box
                sx={{
                  "@media (min-width: 769px)": {
                    display: "none",
                  },
                }}
              >
                <div>
                  {paginationData.offset + paginationData.limit !==
                    paginationData.limit && (
                    <SecondaryButton
                      onClick={() => {
                        setPageIndex(
                          products?.pagination?.offset - paginationData.limit <
                            0
                            ? 0
                            : products?.pagination?.offset -
                                paginationData.limit
                        );
                        scrollToTop();
                      }}
                      sx={{
                        alignSelf: "center",
                        justifySelf: "center",
                        textDecoration: "underline",
                        textUnderlineOffset: "1px",
                        marginTop: "0 !important",
                        display: "inline-block",
                      }}
                    >
                      {"< go back"}
                    </SecondaryButton>
                  )}
                  {paginationData.offset + paginationData.limit <
                    paginationData.total && (
                    <SecondaryButton
                      onClick={() => {
                        setPageIndex(
                          paginationData.limit + products?.pagination?.offset
                        );
                        scrollToTop();
                      }}
                      sx={{
                        alignSelf: "center",
                        justifySelf: "center",
                        textDecoration: "underline",
                        textUnderlineOffset: "1px",
                        marginTop: "0 !important",
                        display: "inline-block",
                      }}
                    >
                      {"see more >"}
                    </SecondaryButton>
                  )}
                </div>
              </Box>
            </>
          )}
        </Box>
        {!isLoading && (
          <Box
            sx={{
              "@media (min-width: 769px)": {
                display: "inherit",
              },
              display: "none",
            }}
          >
            <div>
              {paginationData.offset + paginationData.limit !==
                paginationData.limit && (
                <SecondaryButton
                  onClick={() => {
                    setPageIndex(
                      products?.pagination?.offset - paginationData.limit < 0
                        ? 0
                        : products?.pagination?.offset - paginationData.limit
                    );
                    scrollToTop();
                  }}
                  sx={{
                    alignSelf: "center",
                    justifySelf: "center",
                    textDecoration: "underline",
                    textUnderlineOffset: "1px",
                    marginTop: "0 !important",
                    display: "inline-block",
                  }}
                >
                  {"< go back"}
                </SecondaryButton>
              )}
              {paginationData.offset + paginationData.limit <
                paginationData.total && (
                <SecondaryButton
                  onClick={() => {
                    setPageIndex(
                      paginationData.limit + products?.pagination?.offset
                    );
                    scrollToTop();
                  }}
                  sx={{
                    alignSelf: "center",
                    justifySelf: "center",
                    textDecoration: "underline",
                    textUnderlineOffset: "1px",
                    marginTop: "0 !important",
                    display: "inline-block",
                  }}
                >
                  {"see more >"}
                </SecondaryButton>
              )}
            </div>
          </Box>
        )}
      </Box>
    </Container>
  );
}
