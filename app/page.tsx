"use client";
import Link from "next/link";
import Image from "next/image";
import SearchEngine from "./_components/search-engine";
import SneakerShowcase from "./_components/sneakers-showcase";

export default function Home() {
    return (
        <>
        {/* <SearchEngine/> */}
        <SneakerShowcase />
        </>
    );
}
