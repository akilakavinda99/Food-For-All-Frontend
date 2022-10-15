import React, { useEffect, useState } from 'react'
import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";
import { getOrganizationByID, getReport } from '../../../api/organization.api';

export default function GenerateReport({ organizationId }) {
    const [reportData, setReportData] = useState({})

    const date = new Date();
    const dateStr = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()

    // this month name
    const monthName = date.toLocaleString('default', { month: 'long' }) + ", " + date.getFullYear();

    // get last month name
    const lastMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    const lastMonthName = lastMonth.toLocaleString('default', { month: 'long' }) + ", " + lastMonth.getFullYear();

    // generate random integer
    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomNum = randomInt(100, 999)

    // calculate total
    const calculateTotal = (data) => {
        let total = 0;
        // eslint-disable-next-line array-callback-return
        data.map((item) => {
            total += item[3];
        })
        return total;
    }

    var props = {
        outputType: OutputType.Save,
        returnJsPDFDocObject: true,
        fileName: "Report " + randomNum + " " + date.getFullYear(),
        orientationLandscape: false,
        compress: true,
        logo: {
            src: "https://i.postimg.cc/63fdtXz1/new.png",
            type: 'PNG', //optional, when src= data:uri (nodejs case)
            width: 53.33, //aspect ratio = width/height
            height: 26.66,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        business: {
            name: "Food for All",
            address: "Colombo, Sri Lanka",
            phone: "(+94) 11 123 4567",
            email: "email@foodforall.com",
            email_1: "info@foodforall.com",
            website: "www.foodforall.com",
        },
        contact: {
            label: "Report issued for:",
            name: "organization.name",
            address: "organization.address",
            phone: "organization.contactNumber",
            email: "organization.email",
        },
        invoice: {
            label: "Report #: ",
            num: randomNum,
            invDate: "Report for: " + monthName,
            invGenDate: "Generated on: " + dateStr,
            headerBorder: false,
            tableBodyBorder: false,
            header: [
                {
                    title: "#",
                    style: {
                        width: 10
                    }
                },
                {
                    title: "Fund",
                    style: {
                        width: 60
                    }
                },
                {
                    title: "Donor",
                    style: {
                        width: 50
                    }
                },
                { title: "Amount" },
                { title: "Date" }
            ],
            table: [],
            additionalRows: [{
                col1: 'Total Collected:',
                col2: '145,250.50',
                // col3: 'ALL',
                style: {
                    fontSize: 14 //optional, default 12
                }
            }],
            invDescLabel: "Report Note",
            invDesc: "This is an auto generated report for the month of " + monthName + ". Please contact the admin for any queries.",
        },
        footer: {
            text: "The report is created on a computer and is valid without the signature and stamp.",
        },
        pageEnable: true,
        pageLabel: "Page ",
    }

    useEffect(() => {


    }, [organizationId])

    // generate report for this month
    var pdfThisMonth = async (e) => {
        e.preventDefault();
        getOrganizationByID(organizationId).then((res) => {
            var org = res.data.organization
            props.contact = {
                label: "Report issued for:",
                name: org.name,
                address: org.address + ", " + org.country,
                phone: org.contactNumber,
                email: org.email,
            }
            console.log(date.getMonth() + 1);
            getReport(organizationId, date.getMonth() + 1).then((res) => {
                setReportData(res.data.report);
                props.invoice.table = res.data.report
                props.invoice.additionalRows[0].col2 = "Rs. " + calculateTotal(res.data.report)
                console.log(props.invoice.additionalRows);
                jsPDFInvoiceTemplate(props);
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    // generate report for last month
    var pdfLastMonth = (e) => {
        e.preventDefault();
        props.invoice.invDate = "Report for: " + lastMonthName;
        getOrganizationByID(organizationId).then((res) => {
            var org = res.data.organization
            props.contact = {
                label: "Report issued for:",
                name: org.name,
                address: org.address + ", " + org.country,
                phone: org.contactNumber,
                email: org.email,
            }
            getReport(organizationId, date.getMonth()).then((res) => {
                setReportData(res.data.report);
                props.invoice.table = res.data.report
                props.invoice.additionalRows[0].col2 = "Rs. " + calculateTotal(res.data.report)
                console.log(props.invoice.additionalRows);
                jsPDFInvoiceTemplate(props);
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="row d-flex justify-content-center">
            <div className='col-lg-4 col-md-4 col-sm-4'>
                <button onClick={pdfLastMonth} type="button" className="btn bg-gradient-secondary w-100 my-4 mb-2">Last month report</button>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4'>
                <button onClick={pdfThisMonth} type="button" className="btn bg-gradient-secondary w-100 my-4 mb-2">This month report</button>
            </div>
        </div>
    )
}
