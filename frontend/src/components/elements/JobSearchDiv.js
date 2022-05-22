import { useState, useEffect } from "react";
import React from "react";
import JobCard from "../cards/JobCard.js";
import SkeletonCard from "../cards/SkeletonCard";
import axios from "axios";
import {
  useInfiniteQuery,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";
const queryClient = new QueryClient();

let JobSearchDiv = () => {
  return (
    <div class="w-full bg-white p-12 dark:bg-gray-900">
      <div class="header flex items-end justify-between mb-12">
        <div class="title">
          <p class="text-3xl font-bold text-white mb-4">Lastest job offers</p>
        </div>
      </div>
      <QueryClientProvider client={queryClient}>
        <CardRenderer />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </div>
  );
};

function CardRenderer() {
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery(
    "projects",
    async ({ pageParam = 0 }) => {
      const res = await axios.get(
        "http://localhost:8080/jobs/loadJobs?page=" + pageParam
      );
      return res.data;
    },
    {
      //getPreviousPageParam: firstPage => firstPage.previousId ?? false,
      // getNextPageParam increment pageParam by 1
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.cursor + 1 ?? false;
      },
    }
  );

  const loadMoreButtonRef = React.useRef();

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: true,
    //enabled: !!hasNextPage,
  });

  var isFailing = false;
  console.log(data)
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12">
      {status === "loading" ? (
        <SkeletonCard failing="false" />
      ) : (
        // if error, isfailing = true
        <>
          {data.pages.map(
            (page) => (
              console.log("page", page),
              // wtf
              page.data.map((card) => <JobCard {...card} />)
            )
          )}

          {status === "error" && (
            <SkeletonCard failing="true" failingReason={error.message} />
          )}

          {isFetchingNextPage && <SkeletonCard failing="false" />}
        </>
      )}
      <div ref={loadMoreButtonRef}></div>
    </div>
  );
}

export default JobSearchDiv;
