import {useState, useEffect } from "react";
import React from 'react';
import JobCard from "../cards/JobCard.js";
import axios from 'axios'
import {useInfiniteQuery, QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import useIntersectionObserver from '../../hooks/useIntersectionObserver'
const queryClient = new QueryClient()


let JobSearchDiv = () => {
  return (
    <div class="w-full bg-white p-12 dark:bg-gray-900">
      <div class="header flex items-end justify-between mb-12">
        <div class="title">
          <p class="text-3xl font-bold text-white mb-4">Lastest job offers</p>
        </div>
      </div>
        <QueryClientProvider client={queryClient}>
          <CardRendered/>
        </QueryClientProvider>
    </div>
  );
};



function CardRendered() {
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
    'projects',
    async ({ pageParam = 0 }) => {
      const res = await axios.get('http://localhost:3001/testApi/projects?cursor=' + pageParam)
      console.log("res", res);
      return res.data
    },
    {
      getPreviousPageParam: firstPage => firstPage.previousId ?? false,
      getNextPageParam: lastPage => lastPage.nextId ?? false,
    }
  )

  const loadMoreButtonRef = React.useRef()

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage,
  })

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12">
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
        
          {data.pages.map(page => (
            console.log("page", page),
            <JobCard {...page.data[0]} />
            // Tu sa deje niečo velmi divne - z nejakeho dôvodu sa posiela všetkých 25 prvkov v arraye,
            // tym padom je ...page array full requestu
          ))}
          <div>
            {isFetching && !isFetchingNextPage
              ? 'Background Updating...'
              : null}
          </div>
        </>
      )}
      <hr />
      <ReactQueryDevtools initialIsOpen />
    </div>
  )
}


export default JobSearchDiv;
