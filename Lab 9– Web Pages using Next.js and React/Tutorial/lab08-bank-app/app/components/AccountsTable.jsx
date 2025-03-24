import React from 'react'
import AccountRow from './AccountRow'

export default function AccountsTable({ initialAccounts }) {
    return (
        <>
            <label for="acctType">
                Account Type
            </label>
            <select id="acctType" onchange="handleLoadAccounts(this.value)" class="filter-dropdown">
                <option value="All">All</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
            </select>
            <table id="accounts">
                <thead>
                    <tr>
                        <th>Account No</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {initialAccounts.map(acct => <AccountRow account={acct} />
                    )}
                </tbody>
            </table>
        </>
    )
}
