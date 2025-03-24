'use client'
import React from 'react'

export default function AccountsTable({ initialAccounts }) {
    return (
        <table id="accounts">
            <tr>
                <th>Profile Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Account No</th>
                <th>Account Type</th>
                <th>Balance</th>
                <th>Email</th>
                <th>Date Opened</th>
                <th>Action</th>
            </tr>
            {initialAccounts.map(acct =>
                <tr id={"row-" + acct.accountNo}>
                    <td><img src={acct.profileImage} alt="Profile Image" className="profile-pic" /></td>
                    <td>{acct.firstname}</td>
                    <td>{acct.lastname}</td>
                    <td>{acct.gender}</td>
                    <td>{acct.accountNo}</td>
                    <td>{acct.acctType}</td>
                    <td>{acct.balance} QR</td>
                    <td>{acct.email}</td>
                    <td>{acct.dateOpened}</td>
                    <td>
                        {acct.balance >= 0 ?
                            <button onclick="handleDeleteAccount('{acct.accountNo}')" className="btn-delete">
                                <i className="fas fa-trash">Delete</i>
                            </button> : ''}
                        <button onclick="handleEditAccount('{acct.accountNo}')" className="btn-edit">
                            <i className="fas fa-edit">Edit</i>
                        </button>
                    </td>
                </tr>
            )}
        </table>
    )
}
