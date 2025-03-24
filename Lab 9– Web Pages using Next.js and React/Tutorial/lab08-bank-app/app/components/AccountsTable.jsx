import React from 'react'

export default function AccountsTable({ initialAccounts }) {
    return (
        <table id="accounts">
            <tr>
                <th>Account No</th>
                <th>Account Type</th>
                <th>Balance</th>
                <th>Action</th>
            </tr>
            {initialAccounts.map(acct =>
                <tr id="row-{acct.accountNo}">
                    <td>{acct.accountNo}</td>
                    <td>{acct.acctType}</td>
                    <td>{acct.balance}</td>
                    <td>
                        {acct.balance == 0 ?
                            <button onclick="handleDeleteAccount('${acct.accountNo}')">
                                <i class="fas fa-trash"></i>
                            </button>
                            : ''
                        }
                    </td>
                </tr>
            )}
        </table>
    )
}
