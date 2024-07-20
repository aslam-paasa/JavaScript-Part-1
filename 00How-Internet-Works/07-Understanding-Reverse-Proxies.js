/**
 * Understanding Reverse Proxies - Your invisible guardian online:
 * => Proxy jo hoti hai to Client side pe hoti hai.
 * => For example, hum proxy set krte hai apne device pe like in mobile
 *    ki data yha se waha bhejna hai.
 * => Similarly, Reverse Proxy server side pe set hoti hai.
 * => Humne Client side se bola ki JIO pe request bhejo. To jo request
 *    hai wo pehle reverse proxy server pe jaegi aur wo reverse proxy
 *    server check krega ki kahi request m koi malicious chij to nhi
 *    hai, baar baar request to nhi bhj rha hai. To rate limiting k
 *    liye mainly hum isse use krte hai.
 * => Humne ek script likhi ki JIO k server pe 1-lakh baar request bhejo.
 *    Itni request krnge to isi ko hm DDos Attack bolta hai aur jisse
 *    server crash ho jaati hai. Aur iss chijo ko handle kr skte hai
 *    rate limiting k through aur jiske help se humaare main server pe
 *    load nhi aaega.
 * => Rate Limiting hm software wise bna skte hai lekin hardware wise
 *    v acche se bna skte hai reverse proxy lga k.
 * */ 