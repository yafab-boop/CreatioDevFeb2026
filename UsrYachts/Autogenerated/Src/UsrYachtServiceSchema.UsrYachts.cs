namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtServiceSchema

	/// <exclude/>
	public class UsrYachtServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtServiceSchema(UsrYachtServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8b2ae2f0-85d3-4aa1-a02b-33b09a48e4eb");
			Name = "UsrYachtService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c579a08f-3428-4659-b8c4-1639d6ff4f2d");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,40,206,207,77,85,72,206,207,207,81,72,86,6,210,41,169,10,25,169,69,169,138,138,138,0,53,68,155,91,26,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8b2ae2f0-85d3-4aa1-a02b-33b09a48e4eb"));
		}

		#endregion

	}

	#endregion

}

