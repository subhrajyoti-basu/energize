import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Refundpolicy() {
    return (
        <div>
            <Head>
                <title>Energize EV Charging Solutions - Refund Policy</title>
                <link rel='shortcut icon' href='/favicon.ico' />
            </Head>
            <div className='px-10 max-w-[1238px] mx-auto'>
                <Header />
                <div className='mt-10 max-w-[1000px] mx-auto'>
                    <div className='font-bold text-center'>Refund Policy</div>
                    <b>Introduction</b>
                    <p>Dear Customer,<br /><br />
                        The Platform EV charging (collectively called as Platform) facilitates you to connect with
                        Energize EV Charging Solutions (Energize) as Service Provider for Electric Vehicle (EV)
                        battery charging infrastructure which will be meeting charging needs for your EV. You
                        can either reserve your energy requirement in terms of charge via Reserve order or can
                        do a charge at site itself.<br />
                        We request you to place a Reserve Order for availing the services as per your time and
                        convenience.<br />
                        We understand that there would always be cases wherein an order placed by You would
                        be requiring a cancellation and a refund of your order amount.<br />
                        This document is laying down the policy for cancellation and corresponding refund of
                        your order amount.</p>
                    <b>Your Order</b>
                    <p>Your order on this Platform is a request to avail charging services at an ENERGIZE's
                        charging location of your choice and at a time of your choice. Your order can be a
                        Reserve Order or on-site order placement.<br />
                        Reserve Order/ booking/reservation is allowed 24 hrs in advance.</p>
                    <b>Your Order Statuses</b>
                    <p>Based on the two types of orders, the statuses are given below:
                        1) Reserve/Book :-<br />
                        a. Once you reserve/book an order, then the order status moves to "Reserved" and is
                        shown in the "Booked Time" tab.<br />
                        b. If the order is fulfilled at charging station then the status moves to "History" tab<br />
                        c. If the order is cancelled, it is again reflected under the "History" tab.<br />
                        2) On-site charge<br />
                        a. Charge is done on site and no order status is generated<br />
                        b. If the order is fulfilled at charging station then the status moves to "Transactions" tab<br /></p>

                    <b>Order Cancellation by You
                    </b>
                    <p>You may need to cancel your reserved/booked order. In such a case you can select the
                        order under tab "Booked Time" and cancel it. Following actions will be taken in case a
                        reserved order is cancelled<br />
                        1) Vehicle Charging<br />
                        a. Reserved order can be cancelled by you until order time; however, the order <br />
                        cancellation shall be subject to cancellation fee as indicated to you during reservation in
                        the platform and accepted by you.<br />
                        b. In a rare unfortunate event, when your reservation is accepted and the charger is not
                        available when you reach the site, due to charger breakdown or other issues attributed
                        to the Service provider, your full booking amount, if any, shall be refunded in your
                        wallet. Any reservation/ booking cancellation after the Order time shall be treated as 'No
                        show' and will be charged cancellation fee as accepted by you during placement of order.</p>

                    <b>Order Rejection & non-acceptance</b>
                    <p>Your Order may not get accepted in case the charger is not available at the charging
                        station due to maintenance issues or the charger at charging station is already booked
                        and is not available for the requested order at the time of order placement as Reserve
                        Order or when You reach to any charging station for On-site Order. In a rare unfortunate
                        event, when your reservation is accepted and the charger is not available when you
                        reach the site, due to charger breakdown or other issues attributed to Service provider,
                        your reservation amount, if any, shall be refunded in your wallet by Service Provider.</p>
                    <b>Refund
                    </b>
                    <p>Payment is deducted from your wallet only once the charging is complete. Once the
                        service is availed and payment is made, no refund is permitted.</p>


                </div>
            </div>
            <Footer />
        </div >
    )
}
