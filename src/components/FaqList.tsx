import FaqComponent from "./FaqComponent";

function FaqList(props: any) {
  return (
    <div className="p-4 mt-20 lg:mx-20">
      <h1>FAQ (How it works)</h1>
      <div
        className="mt-3 mb-3"
        style={{ borderBottomWidth: "1px", borderBottomColor: "lightgray" }}
      />
      <FaqComponent
        faq="What type of information can I expect to find with your WHOIS lookup tool?"
        answer="Ownership Details: Registrant name, organization, address, email. Registration Dates: Creation date, expiration date, last updated. Contact Information: Administrative, technical, and billing contacts. Domain Status: Active, inactive, expired, or pending delete. Technical Data: Registrar, DNS servers, IP addresses"
      />
      <FaqComponent
        faq="How accurate and up-to-date is your data?"
        answer="We prioritize accuracy and rely on real-time WHOIS registries for the freshest information. However, some data might be redacted for privacy or subject to delays in updates."
      />
      <FaqComponent
        faq="Are there any limitations or restrictions on free usage?"
        answer="We encourage responsible use, and to ensure a seamless experience for all, we might occasionally introduce reasonable limits on daily or monthly queries. Contact us if you have specific needs exceeding these limits."
      />
      <FaqComponent
        faq="How do you handle privacy and data protection?"
        answer="We respect user privacy and comply with data protection regulations. We never store personal information from WHOIS lookups beyond necessary technical processing."
      />
      <FaqComponent
        faq="Is your tool free to use, or are there paid plans?"
        answer="Our basic WHOIS lookup features with 40+ data points are absolutely free! We also offer affordable paid plans for high-volume users or those seeking advanced features."
      />
      <FaqComponent
        faq="What if I need more information or have specific questions?"
        answer="Our support team is always happy to assist! Feel free to reach out if you have any questions or require further assistance. [ info@geekforce.in | gunjan@geekforce.in ]"
      />
    </div>
  );
}

export default FaqList;
