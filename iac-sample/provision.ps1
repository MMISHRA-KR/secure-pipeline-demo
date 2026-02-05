Configuration SampleADUserProvisioning {
    Import-DscResource -ModuleName PSDesiredStateConfiguration
    Node "localhost" {
        User DemoUser {
            UserName = "demo.user"
            Password = (ConvertTo-SecureString "P@ssw0rd!" -AsPlainText -Force)
            Ensure = "Present"
            FullName = "Demo User"
            Description = "Sample IaC provisioned user"
        }
    }
}

# Generate MOF file
SampleADUserProvisioning -OutputPath ./DSC
