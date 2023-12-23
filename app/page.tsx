'use client';
/* eslint-disable @next/next/no-img-element */
import { useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import Header from "./components/header";
import Login from "./components/Login";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { toast } from "react-hot-toast"
import CountDownTimer from "./components/count-down-timer";

export default function Home() {
    const address = useAddress();
    const [userTickets, setUserTickets] = useState<number>(0);
    const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS);
    const [quantity, setQuantity] = useState<Number>(1);

    const { data: remainingTickets } = useContractRead(contract, "RemainingTickets");
    const { data: currentWinningReward } = useContractRead(contract, "CurrentWinningReward");
    const { data: ticketPrice } = useContractRead(contract, "ticketPrice");
    const { data: ticketCommision } = useContractRead(contract, "ticketCommission");
    const { data: expiration } = useContractRead(contract, "expiration");

    const { data: tickets } = useContractRead(contract, "getTickets")

    useEffect(() => {
        if (!tickets) return;
        const totalTickets: string[] = tickets;
        const numberOfTickets = totalTickets.filter((ticket) => ticket === address).length;
        setUserTickets(numberOfTickets);

    }, [tickets, address])

    const { mutateAsync: BuyTickets } = useContractWrite(contract, "BuyTickets")

    const handleClick = async () => {
        console
        if (!ticketPrice) return

        const notification = toast.loading("Buying tickets")
        const amountToBuy = Number(ethers.utils.formatEther(ticketPrice.toString())) * Number(quantity)

        try {
            const data = await BuyTickets({
                args: [],
                overrides: {
                    value: ethers.utils.parseEther(amountToBuy.toString()),
                },
            })

            toast.success("bought success", { id: notification })
        }
        catch (err) {
            toast.error("something went wrong", { id: notification })
        }
    }

    if (isLoading) return <Loading />
    if (!address) return <Login />

    return (
        <main className="flex-1">
            <Header />

            {/* left side */}
            <div className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5 max-w-6xl">
                <div className="stats-container">
                    <h1 className="text-5xl text-white font-semibold text-center">
                        The Next Draw
                    </h1>

                    <div className="flex justify-between p-2 space-x-2">
                        <div className="stats">
                            <h2 className="text-sm">Total Pool</h2>
                            <p className="text-xl">
                                {
                                    currentWinningReward && ethers.utils.formatEther(currentWinningReward.toString())
                                }{" "}
                                Matic
                            </p>
                        </div>

                        <div className="stats">
                            <h2 className="text-sm">Tickets remaining</h2>
                            <p className="text-xl">{remainingTickets?.toNumber()}</p>
                        </div>
                    </div>

                    {/* countdown timer */}
                    <div className="mt-5 mb-3">
                        <CountDownTimer />
                    </div>
                </div>

                <div className="stats-container space-y-2">
                    <div className="stats-container">
                        <div className="flex justify-between items-center text-white pb-2">
                            <h2>Price per ticket</h2>
                            <p>{
                                ticketPrice && ethers.utils.formatEther(ticketPrice.toString())
                            }{" "}
                                matic</p>
                        </div>

                        <div className="flex text-white items-center space-x-2 bg-background border-primary border p-4">
                            <p>Tickets</p>
                            <input
                                type="number"
                                className="flex w-full bg-transparent text-right outline-none"
                                min={1}
                                max={10}
                                value={quantity.toString()}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-primary text-sm italic font-extrabold">
                                <p>Total cost of tickets</p>
                                <p>
                                    {ticketPrice && Number(ethers.utils.formatEther(ticketPrice.toString())) * Number(quantity)}{" "} matic
                                </p>

                            </div>
                        </div>

                        <div className="flex items-center justify-between text-primary text-xs italic">
                            <p>Service fees</p>
                            <p>
                                {ticketCommision && ethers.utils.formatEther(ticketCommision.toString())}{" "}
                                matic</p>
                        </div>

                        <div className="flex items-center justify-between text-primary text-xs italic">
                            <p>+ Network fees</p>
                            <p>TBC</p>
                        </div>
                    </div>

                    <button
                        disabled={expiration?.toString() <= Date.now().toString() || remainingTickets?.toNumber() <= 0}
                        onClick={handleClick}
                        className="mt-5 w-full bg-gradient-to-br from-orange-500 to-primary px-10 py-5 rounded-md text-white shadow-xl disabled:from-gray-600 disabled:cursor-not-allowed disabled:text-gray-100 font-semibold">
                        Buy {quantity} Tickets for {ticketPrice && Number(ethers.utils.formatEther(ticketPrice.toString())) * Number(quantity)} matic
                    </button>
                </div>

                {userTickets > 0 && (
                    <div className="stats">
                        <p className="text-lg mb-2">You have {userTickets} tickets in this draw</p>
                        <div className="flex max-w-sm flex-wrap gap-2">
                            {Array(userTickets)
                                .fill(0)
                                .map((_, index) => (
                                    <p className="text-primary h-20 w-12 bg-primary/30 rounded-lg flex flex-shrink-0 items-center justify-center text-xs italic" key={index}>
                                        {index + 1}
                                    </p>
                                ))}
                        </div>
                    </div>
                )}
            </div>

            <footer className="text-center text-sm text-gray-500 mt-8 px-4 max-w-2xl mx-auto">
                <p>
                    Disclaimer: Participating in the lottery involves risks. Make sure to conduct your own research and understand the terms before buying tickets.
                </p>
                <p>
                    This platform is for demonstration purposes only and does not constitute financial advice. Always exercise caution when dealing with cryptocurrencies.
                </p>
                <div className="flex justify-center items-center mt-2">
                    <p className="mr-2">Powered by</p>
                    <img
                        src="https://images.mirror-media.xyz/publication-images/jwLubzIqj9ukuHAuSU8nN.png?height=1364&width=1364"
                        alt="thirdweb logo"
                        className="w-10 h-10"
                    />
                </div>
                <p className="mt-2 mb-2">
                    &copy; {new Date().getFullYear()} Rapid Draw. All rights reserved.
                </p>
            </footer>

        </main>
    )
}