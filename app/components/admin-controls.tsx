'use client'
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react"
import { ethers } from "ethers"
import { DollarSignIcon, Download, RotateCcw, StarIcon } from "lucide-react"
import { toast } from "react-hot-toast"

const AdminControls = () => {
    const { contract, isLoading } = useContract(
        process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS,
    )
    const { data: totalCommision } = useContractRead(contract, "operatorTotalCommission")
    const { mutateAsync: DrawWinnerTicket } = useContractWrite(contract, "DrawWinnerTicket")
    const { mutateAsync: RefundAll } = useContractWrite(contract, "RefundAll")
    const { mutateAsync: restartDraw } = useContractWrite(contract, "restartDraw")
    const { mutateAsync: WithdrawCommission } = useContractWrite(contract, "WithdrawCommission")

    const drawWinner = async () => {
        const notification = toast.loading("Drawing Winner")
        try {
            await DrawWinnerTicket({})
            toast.success("Winner Drawn", { id: notification })

        } catch (error) {
            toast.error("Error Drawing Winner", { id: notification })
            console.error(error)
        }
    }

    const refundAll = async () => {
        const notification = toast.loading("Refunding All")
        try {
            await RefundAll({})
            toast.success("Refunded All", { id: notification })
        } catch (error) {
            toast.error("Error Refunding All", { id: notification })
            console.error(error)
        }
    }

    const restart = async () => {
        const notification = toast.loading("Restarting Draw")
        try {
            await restartDraw({})
            toast.success("Draw Restarted", { id: notification })
        } catch (error) {
            toast.error("Error Restarting Draw", { id: notification })
            console.error(error)
        }
    }

    const withdraw = async () => {
        const notification = toast.loading("Withdrawing Commission")
        try {
            await WithdrawCommission({})
            toast.success("Commission Withdrawn", { id: notification })
        } catch (error) {
            toast.error("Error Withdrawing Commission", { id: notification })
            console.error(error)
        }
    }
    if (!contract || isLoading) return (
        <div className="text-white text-center px-5 py-3 rounded-md border-purple-800 border">
            <h2>Admin Controls</h2>
            <p>Loading...</p>
        </div>
    )

    return (
        <div className="text-white text-center px-5 py-3 rounded-md border-purple-800 border bg-indigo-900">
            <h2>Admin Controls</h2>
            <p className="mb-2">Total Commision to be withdrawn:
                {' '}{totalCommision ? ethers.utils.formatEther(totalCommision?.toString()) : '0'}{" "} ETH
            </p>

            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <button onClick={drawWinner} className="bg-indigo-900 p-2 flex-1 rounded-md border-2 border-purple-800 hover:bg-indigo-900/30 transition-colors">
                    <StarIcon className="h-5 w-5 mx-auto mb-2" />
                    Draw Winner
                </button>
                <button onClick={withdraw} className="bg-indigo-900 p-2 flex-1 rounded-md border-2 border-purple-800 hover:bg-indigo-900/30 transition-colors">
                    <DollarSignIcon className="h-5 w-5 mx-auto mb-2" />
                    Withdraw Commission
                </button>
                <button onClick={restart} className="bg-indigo-900 p-2 flex-1 rounded-md border-2 border-purple-800 hover:bg-indigo-900/30 transition-colors">
                    <RotateCcw className="h-5 w-5 mx-auto mb-2" />
                    Restart Draw
                </button>
                <button onClick={refundAll} className="bg-indigo-900 p-2 flex-1 rounded-md border-2 border-purple-800 hover:bg-indigo-900/30 transition-colors">
                    <Download className="h-5 w-5 mx-auto mb-2" />
                    Refund All
                </button>
            </div>
        </div>
    )
}

export default AdminControls