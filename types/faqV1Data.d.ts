declare module '@/jsonData/faq/FaqV1Data.json' {
    const value: Array<{
        id: number;
        accordionId: string;
        accordionClass: string;
        dataBsTarget: string;
        ariaExpanded: "true" | "false";
        ariaControls: string;
        title: string;
        collapseClass: string;
        text: string;
    }>;
    export default value;
}