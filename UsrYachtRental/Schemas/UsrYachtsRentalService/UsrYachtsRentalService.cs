 namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using System;
    using System.Web.SessionState;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrYachtsRentalService : BaseService, IReadOnlySessionState
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public decimal GetAveragePriceByDriveTypeId(string driveTypeId)
        {
            if (string.IsNullOrEmpty(driveTypeId))
            {
                return -1;
            }
            Select select = new Select(UserConnection)
                .Column(Func.Avg("UsrPrice1"))
                .From("UsrYachtR")
                .Where("UsrDriveType1Id").IsEqual(Column.Parameter(new Guid(driveTypeId)))
                .And("UsrStatus1Id").IsEqual(Column.Parameter(new Guid("44d7ab87-56eb-42a4-b1fc-b8c33fdf067f"))) // 1. Operational
                as Select;
            decimal result = select.ExecuteScalar<decimal>();
            return result;
        }

        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
                    RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample()
        {
            return "OK!";
        }
    }
}